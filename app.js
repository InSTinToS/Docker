const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hellow wworld"));

app.listen(3000, () => {
  console.log("Running at 3000");
});
