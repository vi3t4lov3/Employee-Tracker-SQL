const express = require('express');
const mysql = require("mysql2");
const inquirer = require("inquirer");

const app = express();

//connect database using mysql2
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'MyCompany'
})

db.connect();

//routes
app.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employee;`

    
    db.query(sql, (err, result) => { 
        if (err) throw err;
        res.send(result);
    });
})
const PORT = process.env.PORT || 3305;
app.listen(PORT, () => console.log(`Server start ${PORT}`));