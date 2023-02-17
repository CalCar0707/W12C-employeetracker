//link to externals
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml.js');
const { generateKey } = require('crypto');


const menu = [
    {
    type: 'checkbox',
    name: 'optionmenu',
    message: 'What would you like to do?',
    choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee Role'
    ]
    }
];

const addDept = [
    {
        type: 'input',
        name: 'deptname',
        message: 'Please enter the name of the department:'
    }
];

const addRole = [
    {
        type: 'input',
        name: 'rolename',
        message: 'Please enter the name of the role:'
    },
    {
        type: 'input',
        name: 'rolesalary',
        message: 'Please provide the salary:'
    },
    {
        type: 'input',
        name: 'roledept',
        message: 'Please provide the department for the role:'
    }
];

const addEmployee = [
    {
        type: 'input',
        name: 'employeefirst',
        message: 'Please provide employee/s first name:'
    },
    {
        type: 'input',
        name: 'empployeelast',
        message: 'Please provide employee/s last name:'
    },
    {
        type: 'input',
        name: 'employeerole',
        message: 'Please enter employee/s role:'
    },
    {
        type: 'input',
        name: 'employeemanager',
        message: 'Please provide employee/s manager:'
    }
    
];

//b 
//const updateEmployee = [

//]

inquirer.prompt(menu)
 .then((response) => {
    fs.writeFile('index.html', generateHtml(response), () => {
    if ( `${response.menu}` === 'Add a Department') {
        inquirer.prompt(addDept)
    } else if (`${response.menu}` === 'Add a Role') {
        inquirer.prompt(addRole)
    } else if (`${response.menu}` === 'Add an Employee') {
        inquirer.prompt(addEmployee)
    } else {
        return;
    }
 })
});