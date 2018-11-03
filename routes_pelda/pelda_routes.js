var express = require("express");

var peldaRoutes = require("./routes_pelda/peldaRoutes");

var app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/pelda", peldaRoutes);

app.listen(port, () => {
  console.log("Server started on port: " + port);
  console.log("Peldák a routes használatása");
});
