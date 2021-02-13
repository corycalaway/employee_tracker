INSERT INTO department (department_name)
VALUES 
('Sales'),
('Engineering'),
('Legal'),
('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Salesperson', 150000, 1),
('Lawyer', 130254, 3),
('Software Engineer', 100000, 2),
('Accountant', 95000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
('Cory', 'Calaway', 2),
('Gary', 'Hench', 3),
('Nicole', 'Calaway', 1),
('Tammy', 'Fulton', 1);



