const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.send("Welcome to the Backend Server!");
});

app.listen(port, function () {
  console.log(`runPen back-end listening on port ${port}!`);
});
