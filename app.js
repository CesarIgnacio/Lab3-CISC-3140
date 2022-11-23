//Import Express
const express = require('express');
const app = express();
const PORT = 3000;

//Imports SQlite3
const sqlite3 = require("sqlite3").verbose();
//Opens/Reads the Database
var db = new sqlite3.Database('sqlite/squirrel.db');

const squirrelT = 'SELECT * FROM Squirrel WHERE ID=';
const colorT = 'SELECT * FROM Color WHERE COLORID=';

//endpoint to see information of all squirrels
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

//endpoint to see information of color table
app.get('/color', (req,res) =>{
  var results = [];
  db.serialize(function() {
    db.each('SELECT * FROM Color', function(err, row) {
      results.push({ColorId: row.COLORID, mainColor: row.PRIMARYCOLOR, secondaryColor: row.SECONDARYCOLOR});
    }, function() {
      res.send({'ColorID_info': results});
    });
  });
})

//adds a new squirrel information into the database
app.post('/squirrel', (req, res) => {
  var insert = 'INSERT INTO Squirrel (LOCATION, AGE, COLORID, EATING) VALUES (?,?,?,?)';
  db.run(insert, ['north','old', 4, 'false']);
  res.send('A new squirrel was added to the list');
});

//endpoint to retrieve info of one specific squirrel
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

//endpoint to retrieve the squirrel color based on given squirrel colorID
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

//deletes the information of a specific squirrel(WIP)
app.delete('/squirrel/:id',(req,res) => {
  var sqrlNum = req.params.id;
  // var results = [];
  // db.serialize(function() {
  //   db.each('DELETE * FROM Squirrel WHERE ID ='+ sqrlNum, function(err, row) {
  //     results.push({id: row.ID, location: row.LOCATION, age: row.AGE, colorid: row.COLORID, eating: row.EATING});
  //   }, function() {
  //     res.send({'Deleted squirrel info of': results});
  //   });
  // });
  db.run('DELETE * FROM Squirrel WHERE ID =',sqrlNum);
  res.send('squirrel at index '+ sqrlNum +' has been deleted');
});
//when the code is run if it works this shows in terminal
app.listen(
    PORT, 
    () => console.log(`Example app listening on http://localhost:${PORT}`)
)
//default endpoint that sends you to our html file
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


