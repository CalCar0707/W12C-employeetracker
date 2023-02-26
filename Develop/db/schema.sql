DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE departments (
    id INT NOT NULL ,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE roles (
    id INT NOT NULL ,
    title VARCHAR(30) NOT NULL,
    department_id INT,
    salary INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL,
    
);

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR(30) NOT NULL,
);