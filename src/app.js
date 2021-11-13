const express = require("express");
const connection = require("./db");

const app = express();

app.get("/users", (req, res) => {
  const getUserQuery = `SELECT * FROM users`;

  connection.query(getUserQuery, (error, results) => {
    if (error) res.json(error);

    console.log(results);

    const users = results.map((user) => ({
      name: user.name,
      id: user.id,
    }));

    res.json(users);
  });
});

app.get("/", (req, res) => {
  res.send("tst");
});

app.listen(3000, () => {
  console.log("Running at 3000");
});
