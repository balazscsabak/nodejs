var express = require("express");
var path = require("path");
//body parser használata a POST feldolgozásához
var bodyParser = require("body-parser");

var app = express();

const port = 3000;

// globálisan használja a body parsert
// app.use(bodyParser.urlencoded({ extended: false }));
// route-specifikus használat
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//static filok használata
app.use("/assets", express.static(path.join(__dirname, "public")));

// URL-ben lévő adatok beolvasása: req.query
app.get("/get", (req, res) => {
  console.log(req.query);
  res.send(req.query.age);
});

// body parser használata a req.body-val
app.post("/", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
  console.log("QUERY string, POST request, Middleware, Static files");
});
