const express = require("express");
const db = require("./db");

const app = express();

app.get("/users/:id", (req, res) => {
  const getUserQuery = `SELECT * FROM client WHERE i_client_client = ${req.params.id}`;

  db().query(getUserQuery, (error, results) => {
    if (error) res.json(error);
    res.json(results);
  });
});

app.get("/", (req, res) => {
  res.send("tst");
});

app.listen(3000, () => {
  console.log("Running at 3000");
});
