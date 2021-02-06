INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Cory', 'Calaway', 2, NULL),
('Gary', 'Hench', 3, 1),
('Nicole', 'Calaway', 1, 3),
('Tammy', 'Fulton', 1, 2);

INSERT INTO roles (title, salary, department_id)
VALUES 
('Salesperson', 150000, 1),
('Lawyer', 130254, 3),
('Software Engineer', 100000, 2),
('Accountant', 95000, 4);

INSERT INTO department (department_name)
VALUES 
('Sales'),
('Engineering'),
('Legal'),
('Finance');