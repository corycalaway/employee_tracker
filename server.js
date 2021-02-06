const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

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

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  afterConnection();
});

afterConnection = () => {
  connection.query('SELECT * FROM employee', function(err, res) {
    if (err) throw err;
    console.log(res);
    console.table(res)
    connection.end();
  });
};
