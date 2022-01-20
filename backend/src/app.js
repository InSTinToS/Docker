require("dotenv").config();

const express = require("express");
const connection = require("./db");
var bodyParser = require("body-parser");
const cors = require("cors");
const { startDB } = require("./startDb");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

startDB();
console.log(process.env.USER);

app.post("/users", (req, res) => {
  const userName = req.body.name;

  const getUsersQuery = `SELECT * FROM users;`;
  const addUserQuery = `INSERT INTO users (name) VALUES ("${userName}");`;

  connection.query(addUserQuery, (error, results) => {
    if (error) res.json(error);
  });

  connection.query(getUsersQuery, (error, results) => {
    if (!results) res.json(error);
    const users = results.map((user) => ({ name: user.name, id: user.id }));
    res.json({ users });
  });
});

app.listen(process.env.BACKEND_PORT, () =>
  console.log(`Running at ${process.env.BACKEND_PORT}`)
);
