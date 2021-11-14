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

connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB};`, error);

connection.query(`USE ${process.env.DB};`, error);

connection.query(
  `
  CREATE TABLE IF NOT EXISTS users  (
    id INT(11),
    name VARCHAR(255),
    PRIMARY KEY (id)
  );`,
  error
);

module.exports = connection;
