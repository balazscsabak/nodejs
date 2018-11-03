var express = require("express");
var path = require("path");

var app = express();

const port = 3000;

// ejs view engine beallitasa
// default view mappa beállítása
app.set("view engine", "ejs");
var viewPath = path.join(__dirname, "views");
app.set("views", viewPath);

// átadjuk a paramétert
app.get("/", (req, res) => {
  var emberek = ["Balázs", "Bence"];
  res.render("ciklus", { emberek: emberek });
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
  console.log("EJS view engine használata");
});
