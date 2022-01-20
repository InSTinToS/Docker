const connection = require("./db");

const startDB = () => {
  const createDB = `CREATE DATABASE IF NOT EXISTS ${process.env.DB};`;

  const useDB = `USE ${process.env.DB};`;

  const createUsersTable =
    "CREATE TABLE IF NOT EXISTS users (id INT(11) NOT NULL AUTO_INCREMENT,name VARCHAR(255),PRIMARY KEY (id));";

  connection.query(createDB);
  connection.query(useDB);
  connection.query(createUsersTable);
};

module.exports = { startDB };
