const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
const Database = require('./routes/dbRoutes/Employees')
const logo = require('asciiart-logo');
// const config = require('./package.json');
// Creates the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'ccPOKEMONCC??',
  database: 'employee_DB'
});



// afterConnection = () => {
//   connection.query('SELECT * FROM employee', function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     console.table(res)
//     connection.end();
//   });
// };

// view different sections

class Aplication {
  constructor() {
    this.search
    this.addInfo
    this.task
    this.department
    this.departments = [];
  }

  //   startApp() {
  //     console.log(logo({name: 'Employee Tracker',
  //   font: 'Speed',
  //   lineChars: 10,
  //   padding: 2,
  //   margin: 3,
  //   borderColor: 'grey',
  //   logoColor: 'bold-green',
  //   textColor: 'green',
  // }).emptyLine()
  // .right()
  // .emptyLine()
  // .center()
  // .render()
  // );

  //     }

  updateInfo() {
    
    this.departments = connection.promise().query(`SELECT department_name FROM department;`)
    .then(answer => {
      let tempHold, rest;
      //
      [tempHold, rest] = answer

      // console.log(tempHold.map(tr => tr.department_name))
       this.departments = tempHold.map(tr => tr.department_name)
      // return console.log(JSON.stringify(tempHold))
    }).then(() =>
    // this.dbQuestions())
    console.log(this.departments))
  }

  startApp() {
    console.log(logo({
      name: 'Employee Tracker',
      font: 'Speed'
    }).render());
    this.dbQuestions();
    // connection.end();
  }

  dbQuestions() {
    return inquirer
      .prompt({
        type: "list",
        name: "DBOptions",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add employee", "Update Employee", "EXIT"],
      }).then(answer => {



        // choiceSwitch() {


        switch (answer.DBOptions) {
          case "View all departments":
            console.log(answer.DBOptions)
            // afterConnection();
            // return connection.end();
            this.search = new Database().viewDepartments();
            console.log(this.search)
            return this.afterConnection();

          case "View all roles":
            console.log(answer.DBOptions)

            // afterConnection();
            // return connection.end();
            this.search = new Database().viewRoles();
            console.log(this.search)
            return this.afterConnection();

          case "View all employees":
            console.log(answer.DBOptions)
            // afterConnection();
            // return connection.end();
            this.search = new Database().viewEmployees();
            console.log(this.search)
            return this.afterConnection();

          case "Add a department":
            this.task = 'department'
            return this.addInfo = new Database().addDepartment()
              .then((answer) => {
                return this.afterConnectionAdd(answer);
              })
          // console.log(answer.DBOptions)
          // inquirer.prompt({
          //   type: "input",
          //   name: "addNewDepartment",
          //   message: "Enter new department name?"
          // })
          // .then(answer => {
          //   this.search = answer;
          //   return this.afterConnectionAdd()
          // })

          // .then(result => {
          // return this.afterConnectionAdd()
          // })
          // return this.afterConnectionAdd();
          // return console.log(this.addInfo)
          // return this.afterConnectionAdd()
          //  console.log(this.addInfo);
          case "Add a role":
            this.task = 'roles'
            // let departments = [];

            // this.getAllRoles().then(res => {

            //   console.log(res)
            //   // res.map()
            // })
            // let departments;
              // this.departments = connection.query(`SELECT department_name FROM department;`, function (err, res) {
              //    if (err) throw err;
              //    return res.json()
              // })
              
              //  .then(() => {
              return this.addInfo = new Database().addRole(this.departments)
            // //     // departments.push(res.sql)
            //  })
            
            // //  console.log(this.departments)

            //  return this.addInfo = new Database().addRole(this.departments)
              //})
              .then((answer) => {
                console.log(answer)
                return this.afterConnectionAdd(answer);
              })

          case "Add employee":
            console.log(answer.DBOptions)
            return connection.end();

          case "Update Employee":
            console.log(answer.DBOptions)
            return connection.end();

          case "EXIT":
            console.log(answer.DBOptions)
            return connection.end();

          // if (answer.DBOptions === "Engineer") {
          //   this.roleAssign = "Engineer";
          //   this.caller = new Engineer();

          //   return this.startApp();
          // } else if (answer.DBOptions === "Intern") {
          //   this.roleAssign = "Intern";
          //   this.caller = new Intern();
          //   return this.startApp();
          // } else {
          //   connection.end();
          // }

          // .then(() => {
          //   // console.log(this.addInfo)
          //   this.addInfo = new Database().addDepartment();
          //   return this.afterConnectionAdd()
          // })
          // .then(() => {
          //     // this.afterConnectionAdd();
          //     console.log('here')
          // })
        }
      })

 

  }

  getAllRoles() {
    return this.departments = connection.promise().query(`SELECT department_name FROM department;`)}

  afterConnection() {
    console.log('yay')
    connection.query(this.search, function (err, res) {
      if (err) throw err;
      console.log(res);
      console.table(res)
      new Aplication().dbQuestions();
    });
  }

  // afterConnectionAdd() {


  //    let addDataInfo;

  //    addDataInfo.then( this.addInfo = new Database().addDepartment())

  //   connection.query(`INSERT INTO department SET ?`,
  // {
  //   department_name: this.addInfo
  // },
  // function(err, res) {
  //   if (err) throw err;
  //   console.log(res)
  //   // console.log(res.affectedRows + ' product inserted!\n');
  //   // // Call updateProduct() AFTER the INSERT completes
  //   // updateProduct();
  // }

  //   )
  // }
  // }

  afterConnectionAdd(answer) {
    console.log('you made it')
    // this.addInfo = new Database().addDepartment()
    // connection.end();
    console.log(answer)

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
      // let roleInfo = JSON.stringify(answer)
      // console.log(roleInfo)
      // const [roleName, salary, department] = roleInfo;
      const [roleName, salary, department] = answer;

      console.log(roleName.roleName)
      console.log(salary.salary)
      console.log(department.department)
      connection.query(`INSERT INTO roles SET ?`,
        {
          title: roleName.roleName,
          salary: salary.salary
          // department_name: answer.department
        },
        function (err, res) {
          if (err) throw err;

        }

      )

    } else if (this.task === 'employee') {

      connection.query(`INSERT INTO department SET ?`,
        {
          department_name: answer
        },
        function (err, res) {
          if (err) throw err;
        }

      )
    }

    // this.dbQuestions();
    this.updateInfo();
  }
}

// sample join
// afterConnection = (search) => {
//   connection.query(search, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     console.table(res)
//     connection.end();
//   });
// };

// `SELECT id, first_name, last_name 
//   FROM employee
//     LEFT JOIN roles ON employee.role_id = roles.id`

// connection.connect(err => {
//   if (err) throw err;
//   console.log('connected as id ' + connection.threadId);
//   new Aplication().startApp();

// });
// let runSequence = function () {
//   let runningApp = new Aplication()
//   runningApp.startApp()
//     // .then(answer => {
//     //   runningApp.choiceSwitch();
//     //   console.log(answer + 'here')
//     // })
// }
connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  new Aplication().startApp()
  // runSequence();

});

module.exports = Aplication;

