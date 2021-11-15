const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: 3306,
});

const error = (error) => {
  error && console.log(error);
};

module.exports = connection;
