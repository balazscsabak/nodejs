var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "balazscsabak",
  password: "cs4b4kk0s4r",
  database: "storage"
});

connection.connect();

// connection.query("SELECT 1 + 1 AS solution", (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results[0].solution);
// });

module.exports = connection;
