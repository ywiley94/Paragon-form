const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname, "../public");

app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Example app listening on port:" + port);
});
