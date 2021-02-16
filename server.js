const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
const Database = require('./routes/dbRoutes/Employees')
const logo = require('asciiart-logo');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'ccPOKEMONCC??',
  database: 'employee_DB'
});

class Aplication {
  constructor() {
    this.search
    this.addInfo
    this.task
    this.department
    this.departments = [];
    this.roles = [];
    this.currentDept
    this.idDepartment
    this.infoUpdate
    this.allEmployees = [];
    this.currentRole
    this.idEmp
    this.idRole
  }

  updateInfo() {

    this.departments = connection.promise().query(`SELECT department_name FROM department;`)
      .then(answer => {
        let tempHold, rest;
        [tempHold, rest] = answer

        return this.departments = tempHold.map(tr => tr.department_name)
      })
      .then(() => {

        return this.roles = connection.promise().query(`SELECT title FROM roles;`)
      })
      .then(answer => {
        let tempHold, rest;
        [tempHold, rest] = answer

        return this.roles = tempHold.map(tr => tr.title)
      })
      .then(() => {

        return this.allEmployees = connection.promise().query(`SELECT first_name, last_name FROM employee;`)
      })
      .then(answer => {
        let tempHold, rest;
        [tempHold, rest] = answer

        return this.allEmployees = tempHold.map(tr => tr.first_name + ' ' + tr.last_name)
      })

      .then(() =>

        this.dbQuestions())
  }

  startApp() {
    console.log(logo({
      name: 'Employee Tracker',
      font: 'Speed'
    }).render());
    this.updateInfo();
  }

  dbQuestions() {
    return inquirer
      .prompt({
        type: "list",
        name: "DBOptions",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add employee", "Update Employee Role", "EXIT"],
      }).then(answer => {

        switch (answer.DBOptions) {
          case "View all departments":
            this.search = new Database().viewDepartments();
            return this.afterConnection();

          case "View all roles":
            this.search = new Database().viewRoles();
            return this.afterConnection();

          case "View all employees":
            this.search = new Database().viewEmployees();
            return this.afterConnection();

          case "Add a department":
            this.task = 'department'
            return this.addInfo = new Database().addDepartment()
              .then((answer) => {
                return this.afterConnectionAdd(answer);
              })

          case "Add a role":
            this.task = 'roles'

            return this.addInfo = new Database().addRole(this.departments)

              .then((answer) => {
                return this.afterConnectionAdd(answer);
              })

          case "Add employee":
            this.task = 'employee'

            return this.addInfo = new Database().addEmployee(this.roles)

              .then((answer) => {
                return this.afterConnectionAdd(answer);
              })

          case "Update Employee Role":

            this.task = 'updateEmployee'
            return this.infoUpdate = new Database().updateEmployee(this.allEmployees, this.roles)

              .then((answer) => {
                return this.updateConnection(answer);
              })

          case "EXIT":
            return connection.end();


        }
      })



  }

  getAllRoles() {
    return this.departments = connection.promise().query(`SELECT department_name FROM department;`)
  }


  afterConnection() {
    connection.query(this.search, function (err, res) {
      if (err) throw err;
      console.table(res)
      new Aplication().updateInfo();
    });
  }



  updateConnection(answer) {
    const [employee, department] = answer;

    this.currentEmp = employee.employee
    this.currentRole = department.department

    connection.promise().query(`SELECT * FROM roles;`)
      .then(answer => {

        let tempHold, rest;
        let roleId;
        [tempHold, rest] = answer
        roleId = tempHold.indexOf(this.currentRole);

        tempHold.forEach(answer => {
          if (answer.title === this.currentRole) {
            let i;
            i++
            return this.idRole = answer.id
          } else {
            return
          }
        })
        // .then(() => {
        connection.promise().query(`SELECT * FROM employee;`)
          .then(answer => {
            let tempHold, rest;
            let employeeIds;
            [tempHold, rest] = answer
            employeeIds = tempHold.indexOf(this.currentRole);

            tempHold.forEach(answer => {

              // creates a pass if the employee selected = then looks for row to index later
              if (answer.first_name + ' ' + answer.last_name === this.currentEmp) {
                let i;
                i++
                return this.idEmp = answer.id
              } else {
                return
              }

            })

            connection.query(`UPDATE employee SET ? WHERE ?`,

              [
                {
                  role_id: this.idRole
                },
                {
                  id: this.idEmp
                }
              ],
              function (err, res) {
                if (err) throw err;

              }


            )
            this.updateInfo();
          })
      })



  }

  afterConnectionAdd(answer) {

    if (this.task === 'department') {

      connection.query(`INSERT INTO department SET ?`,
        {
          department_name: answer
        },
        function (err, res) {
          if (err) throw err;
        }

      )

    } else if (this.task === 'roles') {

      const [roleName, salary, department] = answer;

      this.currentDept = department.department_id

      connection.promise().query(`SELECT * FROM department;`)
        .then(answer => {

          let tempHold, rest;
          let deptId;
          [tempHold, rest] = answer
          deptId = tempHold.indexOf(this.currentDept);

          tempHold.forEach(answer => {
            if (answer.department_name === this.currentDept) {
              let i;
              i++
              return this.idDepartment = answer.id

            } else {
              return
            }
          })

          connection.query(`INSERT INTO roles SET ?`,

            {
              title: roleName.roleName,
              salary: salary.salary,
              department_id: this.idDepartment
            },
            function (err, res) {
              if (err) throw err;

            }


          )
        })

    } else if (this.task === 'employee') {

      const [firstName, lastName, department] = answer;

      this.currentRole = department.department

      connection.promise().query(`SELECT * FROM roles;`)
        .then(answer => {
          let tempHold, rest;
          let roleId;
          [tempHold, rest] = answer
          roleId = tempHold.indexOf(this.currentRole);

          tempHold.forEach(answer => {

            if (answer.title === this.currentRole) {
              let i;
              i++

              return this.idRole = answer.id

            } else {
              return
            }
          })


          connection.query(`INSERT INTO employee SET ?`,

            {
              first_name: firstName.firstName,
              last_name: lastName.lastName,
              role_id: this.idRole
            },
            function (err, res) {
              if (err) throw err;

            }


          )
        })
    }
    this.updateInfo();
  }

}

connection.connect(err => {
  if (err) throw err;
  new Aplication().startApp()

});

module.exports = Aplication;

