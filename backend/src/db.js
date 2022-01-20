require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "database",
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: 3306,
});

module.exports = connection;
