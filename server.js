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

startApp(){
  console.log(logo({name: 'Employee Tracker',
font: 'Speed'}).render());
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
      .then((answer) => {
        

        switch (answer.DBOptions) {
          case "View all departments":
            console.log(answer.DBOptions)
            afterConnection();
            // return connection.end();

          case "View all roles":
            console.log(answer.DBOptions)
            return connection.end();

          case "View all employees":
            console.log(answer.DBOptions)
            return connection.end();
            
          case "Add a department":
            console.log(answer.DBOptions)
            return connection.end();

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
        }
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
      });
}


}
afterConnection = () => {
  connection.query(`SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.department_name
  FROM employee
    INNER JOIN roles ON employee.role_id = roles.id
    INNER JOIN department ON roles.department_id = department.id
    ORDER BY roles.title ASC;`, function(err, res) {
    if (err) throw err;
    console.log(res);
    console.table(res)
    connection.end();
  });
};

// `SELECT id, first_name, last_name 
//   FROM employee
//     LEFT JOIN roles ON employee.role_id = roles.id`

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  new Aplication().startApp();

});