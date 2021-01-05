var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student1',
  password : 'student1',
  database : 'ourHouse'
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySql :)')
  }
});

module.exports = connection;