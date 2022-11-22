//const app = require('express')();
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())// makes sure endpoint body reads as json

//Imports sqlite3 (might have an error either with const/var or with what is in the ()...)
const sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database('squirrel.db');

//app.get('/',(req,res) => {
  //res.status(200).send.json(require('squirrel.db'))
//})
//making localhost:8080/squirrels endpoint to show data of all squirrels(needs more work)
app.get('/squirrel', (req,res) => {
  const r_id = req.query.id || '';
  const location = req.query.location || '';
  const age = req.query.age || '';
  const colorID = req.query.colorID || '';
  const eating = req.query.eating || '';

  var results = [];
  console.log("Row Id: "+r_id);
  //res.send({"results: " results});
})

// prints line of a specific row (needs more work)
app.post('/squirrel:id', (req,res) => {
  var results = [];
  db.serialize(function(req,res){
    db.each("SELECT rowid AS ID LOACTION AGE COLORID EATING FROM TABLEONE WHERE rowid ="+req.params.id, function(idk){
      results.push({id: HTMLTableRowElement.ID, loc: HTMLTableRowElement.LOCATION, age: HTMLTableRowElement.AGE, colorid: HTMLTableRowElement.COLORID, eating: HTMLTableRowElement.eating});
    },function(){
      res.send({"results": results});
    })
  })
})
//app.get("/color:id", function (req, res) {
  //req. 
   //res.sendFile(__dirname + "/index.html");no
//});

//need to add an app.delete endpoint

//need to add an app.put endpoint for updating information
app.listen(
    port, 
    () => console.log('Example app listening on http://localhost:${PORT}')
) 