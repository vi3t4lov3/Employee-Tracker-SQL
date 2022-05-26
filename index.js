const express = require('express');
const inquirer = require("inquirer");
const getDatabase = require("./routes/database");
const {menu, } = require("./assets/question");
const db = require("./assets/config");


const app = express();
const PORT = process.env.PORT || 3305;

//Router To Get Database
app.use('/db', getDatabase )

//init function
//view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function init() {
    inquirer.prompt(menu).then((answer) => {
        switch (answer.choice) {

            case 'VIEW ALL EMPLOYEES': viewEmployees ();
                break;
            case 'VIEW ALL ROLES': viewRoles();
                break;
            case 'VIEW ALL DEPARTMENTS': viewDepartments();
                break;
            case 'ADD NEW EMPLOYEE': addEmployee();
                break;
            case 'ADD NEW ROLE': addRole();
                break;
            case 'ADD NEW DEPARTMENT': addDepartment();
                break;
            case 'UPDATE EMPLOYEE ROLE': updateEmployee();
                break;
            case 'EXIT': Exit();
                break;   
        }
    })
}

//view the employees
function viewEmployees () {
    const sql = "SELECT * FROM employee";
    db.query(sql, function (err, res) {
        if (err) {
            throw err;
        }
        console.log("---------------------------------------------");
        console.log("OUR EMPLOYEES LISTING BELOW");
        console.table(res);
        inquirer.prompt([{
                type: 'list',
                name: 'choice',
                message: 'PLEASE SELECT AN OPTION',
                choices: ['MAIN MENU', 'EXIT']
            }]).then((answer) => {
            switch (answer.choice) {
                case 'MAIN MENU': init();
                    break;
                case 'EXIT': Exit();
                    break;
            }
        });
    });
};

//exit the menu
function Exit() {
    console.log('Goodbye! Thank you for using the service');
    process.exit();
}

app.listen(PORT, () => console.log(`Server start ${PORT}`));


//initial
init()