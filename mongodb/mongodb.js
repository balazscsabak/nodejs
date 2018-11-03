var express = require("express");
var mongoose = require("mongoose");

const port = 3000;

var app = express();

// Connect to database
mongoose.connect(
  "mongodb://tester1:tester1@ds143262.mlab.com:43262/express",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
    }
    console.log("Sikeres MongoDB kapcsolat");
  }
);

// Schema for database
var todoSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Model
var Todo = mongoose.model("eberek", todoSchema);

app.get("/", (req, res) => {
  var newTodo = Todo({ name: "Balázs", age: 20 }).save((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
  console.log("MongoDB with Mongoose");
});
