USE MyCompany;

INSERT INTO department(id, department_name)
VALUES
(1, 'Customer Services'),
(2, 'Programing'),
(3, 'Hardware'),
(4, 'Technician'),
(5, 'Administration');

INSERT INTO roles(id, title, salary, department_id)
VALUES
(1, 'Help Desk', 45000, 1),
(2, 'Software Engineer', 75000, 2),
(3, 'Manager', 90000, 5),
(4, 'Technician', 60000, 3),
(5, 'Software Engineer Senior', 100000, 2);


INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Tu', 'Nguyen', 2, 1),
(2, 'Thinh', 'Nguyen', 2, 2),
(3, 'Trang', 'Hoang', 1, 3),
(4, 'Vic', 'Williams', 4, 4),
(5, 'David', 'Lee', 1, 5),
(6, 'Lisa', 'Pham', 5, 6);
