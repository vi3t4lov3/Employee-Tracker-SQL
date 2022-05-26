const express = require('express');
const router = express.Router();
const db = require("../assets/config");

//Router get all the Employee
router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employee;`
    db.query(sql, (err, result) => { 
        if (err) throw err;
        res.send(result);
    });
})
//Router get all the department
router.get('/department', (req, res) => {
    const sql = `SELECT * FROM department;`
    db.query(sql, (err, result) => { 
        if (err) throw err;
        res.send(result);
    });
})
//Router get all the department
router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles;`
    db.query(sql, (err, result) => { 
        if (err) throw err;
        res.send(result);
    });
})

module.exports = router;