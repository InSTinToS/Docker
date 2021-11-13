CREATE DATABASE IF NOT EXISTS process.env.DB;

USE process.env.DB;

CREATE TABLE IF NOT EXISTS users (
  id INT(11),
  name VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO users VALUE (0, 'Miguel');
INSERT INTO users VALUE (1, 'Gabriel');