var express = require("express");
var bodyParser = require("body-parser");

var app = express();

const port = 3000;

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// mysql connection
var db = require("./db");

app.get("/", (req, res) => {
  var firstname = "Jenő",
    lastname = "Kovács";

  db.query(
    "INSERT INTO users VALUES (?, ?)",
    [firstname, lastname],
    (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      console.log(results);
      console.log("----");
      console.log(fields);
      res.send("Insert row successfully");
    }
  );
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
  console.log("MySQL használata");
});
