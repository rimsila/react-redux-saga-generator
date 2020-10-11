const express = require("express");
const path = require("path");
const app = express();
const portNumber = 5000;
const sourceDir = "build";
const cors = require("cors");

app.use(express.static(path.join(__dirname, sourceDir)));
app.use(cors());
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, sourceDir, "index.html"));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, sourceDir, "index.html"));
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
