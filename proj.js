var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "KBgoti007",
  database: "MaitrrriofDatabase"
});

con.connect(err => {
  if (!err) {
      console.log("Connected")
  } else {
      console.log("Not Connected")
  }
})
module.exports=con;