const fs = require("fs");
const inquirer = require("inquirer");
const Aplication = require('../../server')
const mysql = require('mysql2');
const connection = require('../../server')

class Database {
    constructor() {
        this.dataSaved = [];
        this.department = [];
    }

    // function to add a department db
    addDepartment() {
        return inquirer.prompt({
            type: "input",
            name: "addNewDepartment",
            message: "Enter new department name."
        })
            .then(answer => {

                return answer.addNewDepartment;
            })

    }

    // function to add a role to db
    addRole(array) {
        // this.department = connection.query(`SELECT department_name FROM department;`, function (err, res) {
        //        if (err) throw err;
        //        return res.json()
        //     })
        console.log(array)
        return inquirer.prompt({
            type: "input",
            name: "roleName",
            message: "Enter new role name."
        }

        )
            .then((answer) => {
                this.dataSaved.push(answer)
                return inquirer.prompt({
                    type: "number",
                    name: "salary",
                    message: "Enter salary amount for role."
                })
                //  return answer.addNewDepartment;
            })

            .then((answer) => {
                this.dataSaved.push(answer)
                return inquirer.prompt({
                    type: "list",
                    name: "department_id",
                    message: "Select a department for role",
                    choices: array
                })
                //  return answer.addNewDepartment;
            })
            .then((answer) => {

                this.dataSaved.push(answer)
                return this.dataSaved;
            })
    }

    // function to add employee to db
    addEmployee() {

        return inquirer.prompt({
            type: "input",
            name: "firstName",
            message: "Enter new Employees first name."
        }

        )
            .then((answer) => {
                this.dataSaved.push(answer)
                return inquirer.prompt({
                    type: "number",
                    name: "lastName",
                    message: "Enter new Employees last name."
                })
                //  return answer.addNewDepartment;
            })

            .then((answer) => {
                this.dataSaved.push(answer)
                return inquirer.prompt({
                    type: "list",
                    name: "department",
                    message: "Select a department for role",
                    choices: ['Sales', 'Legal', 'Finance', 'Engineering']
                })
                //  return answer.addNewDepartment;
            })
            .then((answer) => {

                this.dataSaved.push(answer)
                return this.dataSaved;
            })
    
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

        // remove employee and change employee role id to rolesid
        // return `SELECT employee.role_id, roles.title, roles.salary, department.department_name
        // FROM employee
        // RIGHT JOIN roles ON employee.role_id = roles.id
        // LEFT JOIN department ON roles.department_id = department.id
        // ORDER BY roles.title ASC;`
        return `SELECT roles.id, roles.title, roles.salary, department.department_name
        FROM roles
        LEFT JOIN department ON roles.department_id = department.id
        ORDER BY roles.title ASC;`


    }
    // view all emplohees function
    viewEmployees() {


        return `SELECT employee.first_name, employee.last_name, employee.id, roles.title, roles.salary, department.department_name
              FROM employee
              INNER JOIN roles ON employee.role_id = roles.id
              INNER JOIN department ON roles.department_id = department.id
              ORDER BY roles.title ASC;`

    }
}

module.exports = Database;