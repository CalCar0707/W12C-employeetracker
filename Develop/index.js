//link to externals
const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table')
const generateDepartments = require('./generateHtml.js');
const { generateKey } = require('crypto');

const db = require('./server.js');

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
        message: 'Please provide employee\'s first name:'
    },
    {
        type: 'input',
        name: 'employeelast',
        message: 'Please provide employee\'s last name:'
    },
    {
        type: 'input',
        name: 'employeerole',
        message: 'Please provide employee\'s role:'
    },
    {
        type: 'input',
        name: 'employeedept',
        message: 'Please enter employee\'s department:'
    },
    {
        type: 'input',
        name: 'employeesal',
        message: 'Please provide employee\'s salary:'
    },
    {
        type: 'input',
        name: 'employeemanager',
        message: 'Please provide employee\'s manager:'
    }
    
];

//const updateEmployee = [
//{
  //  type: 'checkbox',
    //name: 'updateemployee',
    //message: 'Please choose employee to update: ',
    //choices: [
      //  console.table('SELECT * FROM employees')]
//}
//]
 

inquirer.prompt(menu)
 .then((response) => {
    fs.writeFile('index.html', generateDepartments(response), () => {
    if (`${response.optionmenu}` === 'View All Departments') {
        db.query('SELECT * FROM departments', function (err, results) {
            console.table(results);
          });
    } else if (`${response.optionmenu}` === 'View All Roles') {
        db.query('SELECT * FROM roles', function (err, results) {
            console.table(results);
          });
    } else if (`${response.optionmenu}` === 'View All Employees') {
        db.query('SELECT * FROM employees', function (err, results) {
            console.table(results);
          });
    } else if (`${response.optionmenu}` === 'Add a Department') {
        addDeptToDb();
    } else if (`${response.optionmenu}` === 'Add a Role') {
        addRoleToDb();
    } else if (`${response.optionmenu}` === 'Add an Employee') {
        addEmployeeToDb();
    } 
   // else if (`${response.optionmenu}` === 'Update an Employee Role') {
     //   updateEmployeeInDb();
    //} 
    else {
        return inquirer.prompt(menu);
    }
 })
});

function addDeptToDb () {
    inquirer.prompt(addDept)
    .then((response) => {
        //console.log(response);
        db.query('INSERT INTO departments SET ?', {
            //dept name works, id does not show or auto increment
            id: 1,
            department: response.deptname
        })

    },(err) => console.log(err)
    )
};

function addRoleToDb() {
    inquirer.prompt(addRole)
    .then((response) => {
       // console.log(response);
        db.query('INSERT INTO roles SET ?', {
            //wokring properly, does not show id
            id: 1,
            title: response.rolename,
            department: response.roledept,
            salary: response.rolesalary
        })
    }, (err) => console.log(err)
     )
};


function addEmployeeToDb() {
    inquirer.prompt(addEmployee)
    .then((response) => {
       // console.log(response);
        db.query('INSERT INTO employees SET ?', {
            //working properly, does not show id
            id: 1,
            first_name: response.employeefirst,
            last_name: response.employeelast,
            title: response.employeerole,
            department: response.employeedept,
            salary: response.employeesal,
            manager: response.employeemanager 
        })
    }, (err) => console.log(err)
     )
};

//function updateEmployeeInDb(){
   // inquirer.prompt(updateEmployee)
    
    
    //};