const fs = require("fs");
const inquirer = require("inquirer");
const Aplication = require('../../server')


class Database {
    constructor() { }

    // function to add a department db
    addDepartment() {
       return inquirer.prompt({
        type: "input",
        name: "addNewDepartment",
        message: "Enter new department name?"
      })
      .then(answer => {
        
        return answer.addNewDepartment;
       })
        
    }

    // function to add a role to db
    addRole() {

    }

    // function to add employee to db
    addEmployee() {

    }

    // function to update employee in db
    updateEmployee() {

    }

    // view all departments function
    viewDepartments() {
        return `SELECT * FROM department;`
    }

    // view all roles function
    viewRoles() {

        return   `SELECT employee.role_id, roles.title, roles.salary, department.department_name
        FROM employee
        INNER JOIN roles ON employee.role_id = roles.id
        INNER JOIN department ON roles.department_id = department.id
        ORDER BY roles.title ASC;`

    }
    // view all emplohees function
    viewEmployees() {

        
     return   `SELECT employee.first_name, employee.last_name, employee.id, roles.title, roles.salary, department.department_name
              FROM employee
              INNER JOIN roles ON employee.role_id = roles.id
              INNER JOIN department ON roles.department_id = department.id
              ORDER BY roles.title ASC;`

    }
}

module.exports = Database;