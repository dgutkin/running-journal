const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes.js");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/runpen')
  .then(() => console.log('Database Connected!'));

app.get("/", function (req, res) {
  res.send("Welcome to the runPen back-end server!");
});

app.use("/", userRoutes);

app.listen(port, function () {
  console.log(`runPen back-end listening on port ${port}!`);
});
