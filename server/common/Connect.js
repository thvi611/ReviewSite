const mysql = require('mysql')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "test_db"
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


module.exports = db