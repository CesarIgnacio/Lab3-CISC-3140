//Import Express
const express = require('express');
const app = express();
const PORT = 3000;

//Imports SQlite3
const sqlite3 = require("sqlite3").verbose();
//Opens the Database
var db = new sqlite3.Database('sqlite/squirrel.db');

const squirrelT = 'SELECT * FROM Squirrel WHERE ID=';
const colorT = 'SELECT * FROM Color WHERE COLORID=';


app.get('/squirrel/:id', (req, res) => {
  var results = [];
  db.serialize(function() {
    db.each(squirrelT + req.params.id, function(err, row) {
      results.push({id: row.ID, location: row.LOCATION, age: row.AGE, colorid: row.COLORID, eating: row.EATING});
    }, function() {
      res.send({'squirrel_info': results});
    });
  });
});

app.get('/color/:id', (req, res) => {
  var result = [];
  db.serialize(function() {
    db.each(colorT + req.params.id, function(err, row) {
      result.push({colorid: row.COLORID, primarycolor: row.PRIMARYCOLOR, secondarycolor: row.SECONDARYCOLOR});
    }, function() {
      res.send({'color_info': result});
    });
  });
});

app.get('/squirrel', (req, res) => {
  var results = [];
  db.serialize(function() {
    db.each('SELECT * FROM Squirrel', function(err, row) {
      results.push({id: row.ID, location: row.LOCATION, age: row.AGE, colorid: row.COLORID, eating: row.EATING});
    }, function() {
      res.send({'squirrel_info': results});
    });
  });
});

app.get('/color', (req, res) => {
  var results = [];
  db.serialize(function() {
    db.each('SELECT * FROM Color', function(err, row) {
      results.push({colorid: row.COLORID, primarycolor: row.PRIMARYCOLOR, secondarycolor: row.SECONDARYCOLOR});
    }, function() {
      res.send({'squirrel_info': results});
    });
  });
});

app.post('/squirrel', (req, res) => {
  //var newSquirrels = [];
  //var n1 = [newSquirrels.push(108,'north','old', 4, 'false')];
  //var n2 = [newSquirrels.push(109,'north','old', 4, 'false')]
  //newSquirrels.push(114,'north','old', 4, 'false');
  //newSquirrels.push(115,'north','old', 4, 'false');

  var insert = 'INSERT INTO Squirrel (LOCATION, AGE, COLORID, EATING) VALUES (?,?,?,?)';
  db.run(insert, ['north','old', 4, 'false']);
  //db.run(insert, n2);
  res.send('A new squirrel was added to the list');
});

app.listen(
    PORT, 
    () => console.log(`Example app listening on http://localhost:${PORT}`)
);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

