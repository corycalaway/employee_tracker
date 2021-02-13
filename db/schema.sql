-- DROP TABLE IF EXISTS department;
-- DROP TABLE IF EXISTS roles;
-- DROP TABLE IF EXISTS employee;
DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;
USE employee_DB;


CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    department_name varchar(30) UNIQUE NOT NULL
   
);

CREATE TABLE roles (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(30),
    salary DECIMAL (8,2),
    department_id INT UNSIGNED NOT NULL,
    INDEX dep_ind (department_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
    -- FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL,
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name varchar(30),
    role_id INT UNSIGNED NOT NULL,
    -- FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE, 
    INDEX role_ind (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
    -- manager_id INTEGER(1),
    -- id of current employees manager id
    -- FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE SET NULL,
    
);