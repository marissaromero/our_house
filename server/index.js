const express = require('express');
const app = express();
const PORT = 8080 || process.env.PORT;
const db= require('../database')

const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.use(express.static('public'));


app.get('/homeUsers/:home_id', function (req, res) {

  const homeId = req.params.home_id;

  const sql = `SELECT name FROM homes WHERE id = ?`;

  db.query(sql, homeId, (err, data) => {
    if (err) {
      console.log('Error fetching home user information', err);
      res.send(500);
    } else {
      res.send(data);
    }
  })
});

app.get('/user/:user_id', function (req, res) {

  const userId = req.params.user_id;

  const sql = `SELECT * FROM users WHERE id = ?`;

  db.query(sql, userId, (err, data) => {
    if (err) {
      console.log('Error fetching user information', err);
      res.send(500);
    } else {
      res.send(data);
    }
  })
});

app.get('/status/:status_id', function (req, res) {

  const statusId = req.params.status_id;

  const sql = `SELECT * FROM status WHERE id = ?`;

  db.query(sql, userId, (err, data) => {
    if (err) {
      console.log('Error fetching status information', err);
      res.send(500);
    } else {
      res.send(data);
    }
  })
});

app.post('/user', function (req, res) {

  const user = [req.body.firstName, req.body.lastName, req.body.username, req.body,password, req.body.homeId, req.body.userAvatar];

  const sql = `INSERT INTO users (firstName, lastName, username, password, homeId, currentStatus, userAvatar) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, user, (err, data) => {
    if (err) {
      console.log('Error inputting user information', err);
      res.send(500);
    } else {
      res.send(201);
    }
  })
});





app.listen(8080, function() {
  console.log('listening on port 8080!');
});
