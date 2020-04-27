
// dependencies
var mysql = require("mysql");

// connection that we can export to other files
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "4153FFSQLPW",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

//   exporting connection
  module.exports = connection;