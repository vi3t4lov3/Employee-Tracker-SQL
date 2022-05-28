const inquirer = require("inquirer");

// Menu Questions
const menu = [{
    type: 'list',
    name: 'choice',
    message: `PLEASE SELECT ONE OF THE OPTIONS BELOW`,
    choices: [
        'VIEW ALL EMPLOYEES',
        'VIEW ALL DEPARTMENTS',
        'VIEW ALL ROLES',
        'ADD NEW DEPARTMENT',
        'ADD NEW ROLE',
        'ADD NEW EMPLOYEE',
        'UPDATE EMPLOYEE ROLE',
        'EXIT'
    ],
    default: 'VIEW ALL EMPLOYEES'
}];

//main questions to go back Menu
const optionsSelect = [{
    type: 'list',
    name: 'choice',
    message: 'PLEASE SELECT AN OPTION',
    choices: ['MAIN MENU', 'EXIT']
    }]

//Add Employee Questions
const employeeQuestion = (roles, managers) => {
    return [
        {
            name: 'first_name',
            type: 'input',
            message: `INSERT EMPLOYEE'S FIRST NAME`
        }, {
            name: 'last_name',
            type: 'input',
            message: `INSERT EMPLOYEE'S LAST NAME`
        }, {
            name: 'role',
            type: 'list',
            message: `WHAT IS THE ROLE OF THIS EMPLOYEE?`,
            // connect roles from the db
            choices: roles
        }, {
            name: 'manager',
            type: 'list',
            message: `WHO IS THIS EMPLOYEE'S MANAGER?`,
            // connect employees with manager id from the db
            choices: managers
        },
    ];
}

//Add Department Questions
const departmentQuestion = [{
    name: 'department_name',
    type: 'input',
    message: `PLEASE INSERT DEPARTMENT NAME?`
}];

//add roles
const roleQuestion = (departments) => {
    return [
        {
            name: 'title',
            type: 'input',
            message: `What is the name of this role?`
        }, {
            name: 'salary',
            type: 'input',
            message: `What is the salary of this role(type number)?`
        }, {
            name: 'department_id',
            type: 'list',
            message: `Which department is this role belonging to?`,
            // connect departments from the db
            choices: departments
        }
    ];
}
//update employee
const updateEmployee = (employeeList, roleLists) => {
return [
    {
        name: 'update',
        type: 'list',
        message: 'Update Employee option',
        choices: employeeList
    }, {
        name: 'role',
        type: 'list',
        message: 'Pick a new role',
        choices: roleLists
    }
];
};
module.exports = {
    menu,
    employeeQuestion,
    updateEmployee,
    departmentQuestion,
    roleQuestion,
    optionsSelect
};