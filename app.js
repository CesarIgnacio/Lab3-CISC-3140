//Import Express
const { json } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

//Imports SQlite3
const sqlite3 = require("sqlite3").verbose();
//Opens the Database
var db = new sqlite3.Database('sqlite/squirrel.db');

const squirrelT = 'SELECT * FROM Squirrel WHERE ID=';
const colorT = 'SELECT * FROM Color WHERE COLORID=';

// Middlewear functions 
app.use(bodyParser.json()); // Add suport for reading budy variables
app.use(bodyParser.urlencoded({extended:true}));

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

app.delete('/squirrel/:id', (req, res) => {
  db.run('DELETE FROM squirrel WHERE id = ?', req.params.id,  (e) => {
      if(e) {
          console.log(e)
          return res.status(500).send()
      }
    res.json({'deleted_squirrel_id': req.params.id})
  })
})


app.delete('/squirrel/:id', (req, res) => {
  db.run('DELETE FROM squirrel WHERE id = ?', req.params.id,  (e) => {
      if(e) {
          console.log(e)
          return res.status(500).send()
      }
    res.json({'deleted_squirrel_id': req.params.id})
  })
})


app.post('/squirrel', (req, res) => {

  var {LOCATION, AGE, COLORID, EATING} = req.body; // Distructuring into diffe
  var insert = `INSERT INTO Squirrel (LOCATION, AGE, COLORID, EATING) VALUES (?,?,?,?)`; // (?,?,?,?) SQLite format
  db.run(insert, [LOCATION, AGE, COLORID, EATING]);

  res.send('A new squirrel was added to the list');
});

//updates a specific squirrel
app.put('/squirrel/:id',(req,res) =>{
  var r_id = req.query.id;
  var f1 = req.query.f1;
  var f2 = req.query.f2;
  const sql = "SELECT * FROM Squirrel WHERE ROWID="+r_id;
  var results = [];
  // var sqlupdate =[];
  //const queryObject = `http://localhost:3000`.parse(req.query,true).query
  if(f1 && f2){
     sql += `WHERE ${f1} LIKE '%${f2}%`;
  }
  db.all("SELECT * FROM Squirrel",[],function(error,row){
    results.push({id: row.ID, location: row.LOCATION, age: row.AGE, colorid: row.COLORID, eating: row.EATING});
  }),function(){
     res.send({'squirrel has been updated': results});
  }
  // if(r_id !== '' && loc !== ''){
  //   db.serialize(function(){
  //     db.each(squirrelT + r_id, function(err, row) {
  //       results.push({id: row.ID, location: row.LOCATION, age: row.AGE, colorid: row.COLORID, eating: row.EATING});
  //       db.run("UPDATE Squirrel SET LOCATION=? WHERE ROWID=?",[r_id,loc]);
  //       sqlupdate.push({id: row.ID, location: loc, age: row.AGE, colorid: row.COLORID, eating: row.EATING});
  //     }, function() {
  //       res.send({'squirrel_info': results});
  //     });
  //   })
  //   //`SELECT * FROM Squirrel` += `WHERE`
  // }
  //db.run(`UPDATE Squirrel SET LOCATION = ? WHERE ROWID =?`,[loc, r_id]);

})

app.listen(
    PORT, 
    () => console.log(`Example app listening on http://localhost:${PORT}`)
);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

