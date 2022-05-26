const inquirer = require("inquirer");

// Menu Questions
const menu = [{
    type: 'list',
    name: 'choice',
    message: `Please select one of the options below`,
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


module.exports = {
    menu,
};