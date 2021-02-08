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

  startApp() {
    console.log(logo({
      name: 'Employee Tracker',
      font: 'Speed'
    }).render());
    this.dbQuestions();
    // connection.end();
  }

  dbQuestions() {
    inquirer
      .prompt({
        type: "list",
        name: "DBOptions",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add employee", "Update Employee", "EXIT"],
      })

  }

  choiceSwitch() {


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

        return 'department'

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
      // this.addInfo = new Database().addDepartment()
      // .then(result => {
      // return this.afterConnectionAdd()
      // })
      // return this.afterConnectionAdd();
      // return console.log(this.addInfo)
      // return this.afterConnectionAdd()
      //  console.log(this.addInfo);
      case "Add a role":
        console.log(answer.DBOptions)
        return connection.end();

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
  }
    afterConnection() {
      console.log('yay')
      connection.query(this.addInfo, function (err, res) {
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

    afterConnectionAdd() {

      // this.addInfo = new Database().addDepartment()

      connection.query(`INSERT INTO department SET ?`,
        {
          department_name: this.addInfo
        },
        function (err, res) {
          if (err) throw err;
          console.log(res)
          // console.log(res.affectedRows + ' product inserted!\n');
          // // Call updateProduct() AFTER the INSERT completes
          // updateProduct();
        }

      )
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
let runSequence = function () {
  let runningApp = new Aplication()
  runningApp.startApp()
    // .then(answer => {
    //   runningApp.choiceSwitch();
    //   console.log(answer + 'here')
    // })
}
connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  // new Aplication().startApp()
  runSequence();

});
module.exports = Aplication;