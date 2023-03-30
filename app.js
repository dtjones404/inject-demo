const Express = require("express");

const app = Express();

app.get("/", (req, res) => {
  res.send("hi world");
});

app.get("/echo/:word", (req, res) => {
  res.send(req.params.word);
});

module.exports = app;
