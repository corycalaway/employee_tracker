-- SELECT title, salary, department_name
-- FROM roles
--   INNER JOIN department ON department_id = department.id;

-- SELECT first_name, last_name, title, salary
-- FROM employee
--   INNER JOIN roles ON employee.role_id = roles.id;

-- SELECT title, salary, department_name
-- FROM roles
--   INNER JOIN department ON department_id = department.id;

SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.department_name
FROM employee
  INNER JOIN roles ON employee.role_id = roles.id
  INNER JOIN department ON roles.department_id = department.id
  ORDER BY roles.title ASC;
 