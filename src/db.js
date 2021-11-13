const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: 3306,
});

const error = (error) => console.log(error);

connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB};`, error);

connection.query(`USE ${process.env.DB};`, error);

connection.query(
  `
  CREATE TABLE users (
    id INT(11),
    name VARCHAR(255),
    PRIMARY KEY (id)
  );`,
  error
);

connection.query("INSERT INTO users VALUE (0, 'Miguel');", error);

connection.query("INSERT INTO users VALUE (1, 'Gabriel');", error);

module.exports = connection;
