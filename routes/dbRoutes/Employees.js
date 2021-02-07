const fs = require("fs");
const inquirer = require("inquirer");



class Database {
    constructor() { }

    // function to add a department db
    addDepartment() {

        
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

        return   `SELECT employee.role_id, roles.title, department.department_name, roles.salary,
              FROM employee
              INNER JOIN roles ON employee.role_id = roles.id
              INNER JOIN department ON roles.department_id = department.id
              ORDER BY roles.title ASC;`

    }
    // view all emplohees function
    viewEmployees() {

        
     return   `SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.department_name
              FROM employee
              INNER JOIN roles ON employee.role_id = roles.id
              INNER JOIN department ON roles.department_id = department.id
              ORDER BY roles.title ASC;`

    }
}

module.exports = Database;