DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;
USE employee_DB;


CREATE TABLE department (
    id INTEGER(1) AUTO_INCREMENT NOT NULL, 
    department_name varchar(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER(1) AUTO_INCREMENT NOT NULL, 
    title VARCHAR(30),
    salary DECIMAL (8,2),
    department_id INTEGER(1),
    -- CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INTEGER(1) AUTO_INCREMENT NOT NULL, 
    first_name VARCHAR(30),
    last_name varchar(30),
    role_id INTEGER(1),
    -- FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE, 
    manager_id INTEGER(1),
    -- id of current employees manager id
    -- CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);