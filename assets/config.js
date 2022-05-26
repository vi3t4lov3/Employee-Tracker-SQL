const mysql = require("mysql2");

//connect database using mysql2
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'MyCompany'
})
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`AND HAD CONNECT SUCCESSED TO SERVER`);
    
});

module.exports = db;