var express = require("express");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

var app = express();

const port = 3000;
const email = "balazs.csabak@gmail.com";
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log("Server started on port: " + port);
  console.log("Express validator");
});
