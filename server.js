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
connection.end();
}

}
// afterConnection = () => {
//   connection.query(`SELECT * FROM employee`, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     console.table(res)
//     connection.end();
//   });
// };

// `SELECT id, first_name, last_name 
//   FROM employee
//     LEFT JOIN roles ON employee.role_id = roles.id`

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  new Aplication().startApp();

});