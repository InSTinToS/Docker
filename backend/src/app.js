const express = require("express");
const connection = require("./db");

const app = express();

const getUsersQuery = `SELECT * FROM users;`;

app.get("/users", (req, res) => {
  connection.query(getUsersQuery, (error, results) => {
    if (error) res.json(error);

    const users =
      results &&
      results.map((user) => ({
        name: user.name,
        id: user.id,
      }));

    res.json(users);
  });
});

app.post("/users", (req, res) => {
  const userName = req.body.name;

  const addUserQuery = `INSERT INTO users VALUES ("${userName}");`;

  connection.query(addUserQuery, (error, results) => {
    if (error) res.json(error);
  });

  connection.query(getUsersQuery, (error, results) => {
    if (error) res.json(error);

    const users =
      results &&
      results.map((user) => ({
        name: user.name,
        id: user.id,
      }));

    res.json(users);
  });
});

app.get("/", (req, res) => {
  res.send("tst");
});

app.listen(process.env.BACKEND_PORT, () =>
  console.log(`Running at ${process.env.BACKEND_PORT}`)
);
