DROP DATABASE IF EXISTS emmployee_db;
CREATE DATABASE employee_db;

USE employee_db;

--departments table
CREATE TABLE departments (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL
);


CREATE TABLE roles (
    title VARCHAR(100) NOT NULL,
    id INT NOT NULL,
    department VARCHAR(100) NOT NULL,
    salary INT NOT NULL
);

CREATE TABLE employees(
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR(100) NOT NULL
);