const express = require("express");
const app = express();
const port = 8080;

app.get("/", function (req, res) {
  res.send("Welcome to the Backend Server!");
});

app.listen(port, function () {
  console.log(`Running journal backend listening on port ${port}!`);
});
