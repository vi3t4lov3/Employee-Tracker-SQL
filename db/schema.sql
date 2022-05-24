DROP DATABASE IF EXISTS MyCompany;
CREATE DATABASE MyCompany;

USE MyCompany;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT,
    PRIMARY KEY(id),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY(manager_id) REFERENCES employee (id)
);