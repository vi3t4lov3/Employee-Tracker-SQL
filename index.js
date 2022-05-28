const express = require('express');
const inquirer = require("inquirer");
const getDatabase = require("./routes/database");
const {menu, 
    optionsSelect, 
    employeeQuestion, 
    updateEmployee, 
    departmentQuestion, 
    roleQuestion } = require("./assets/question");
const db = require("./assets/config");


const app = express();
const PORT = process.env.PORT || 3305;

//Router To Get Database
app.use('/data', getDatabase )

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
    db.query(sql,  (err, res) => {
        if (err) {
            throw err;
        }
        console.log("---------------------------------------------");
        console.log("OUR EMPLOYEES LISTING BELOW");
        console.table(res);
        inquirer.prompt(optionsSelect).then((answer) => {
            switch (answer.choice) {
                case 'MAIN MENU': init();
                    break;
                case 'EXIT': Exit();
                    break;
            }
        });
    });
};

//View roles
function viewRoles() {
    const sql = "SELECT * FROM roles";
    db.query(sql, function (err, res) {
        if (err) {
            throw err;
        }
        console.log("---------------------------------------------");
        console.log("OUR COMPANY HAVE ROLES LISTING BELOW");
        console.table(res);
        inquirer.prompt(optionsSelect).then((answer) => {
            switch (answer.choice) {
                case 'MAIN MENU': init();
                    break;
                case 'EXIT': Exit();
                    break;
            }
        });
    });
};

//View department
function viewDepartments() {
    const sql = "SELECT * FROM department";
    db.query(sql, function (err, res) {
        if (err) {
            throw err;
        }
        console.log("---------------------------------------------");
        console.log("OUR COMPANY DEPARTMENTS LISTING BELOW");
        console.table(res);
        inquirer.prompt(optionsSelect).then((answer) => {
            switch (answer.choice) {
                case 'MAIN MENU': init();
                    break;
                case 'EXIT': Exit();
                    break;
            }
        });
    });
};
//add employees
function addEmployee() {
    const sqlEmployees = "SELECT * FROM employee;";
    const sqlRoles = 'SELECT * FROM roles;';
    db.query(sqlEmployees, (err, res) => {
        // console.table(res);
        if (err) {
            throw err;
        }
        const employees = res.map((e) => ({name: `${e.first_name} ${e.last_name}`, value: e.id}));
    db.query(sqlRoles, (err, res) => {
        if (err) {
            throw err;
        }
        const roles = res.map((r) => ({name: `${r.title}`, value: r.id}));
        const addEmployeeQuestions = employeeQuestion(roles, employees);
        inquirer.prompt(addEmployeeQuestions) 
        .then((response) => {
            const insertEmployeeQuery = 'INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
            db.query(insertEmployeeQuery, [
                response.first_name, 
                response.last_name, 
                response.role, 
                response.manager
            ], (err, res) => {
                if (err) {
                    throw err;
                }
                // console.log('OUR NEW EMPLOYEES TABLE')
                // console.table(res);
                inquirer.prompt(optionsSelect)
                .then((answer) => {
                    switch (answer.choice) {
                        case 'MAIN MENU': init();
                            break;
                        case 'EXIT': Exit();
                            break;
                    }
                });
            });
        });
    });
});
};
//add role
function addRole() {

};
//add department
function addDepartment() {
    const sqlDepartment = "SELECT * FROM department;";
    inquirer.prompt(departmentQuestion)
    .then((response) => {
        const insertDepartment = 'INSERT INTO department(department_name) VALUES(?);'
        db.query(insertDepartment, response.department_name, (err, res) => {
            if (err) {
                throw err;
            }
        inquirer.prompt(optionsSelect)
        .then((answer) => {
            switch (answer.choice) {
                case 'MAIN MENU': init();
                    break;
                case 'EXIT': Exit();
                    break;
            }
        })
    })
 })
};
//update department
function updateDepartment() {

};
//exit the menu
function Exit() {
    console.log('GOODBYE! THANK YOU FOR USING OUR SERVICE');
    process.exit();
}

app.listen(PORT, () => console.log(`\n SERVER START AT PORT ${PORT}`));

//initial
init()