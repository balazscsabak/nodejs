var express = require("express");
var router = express.Router();

router.get("/pelda", (req, res) => {
  res.send("Beírt url: " + req.url);
});
router.get("/", (req, res) => {
  res.send("Beírt url: " + req.url);
});

module.exports = router;
