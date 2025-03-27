const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/users", (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if (err) res.status(500).send("Error reading file");
    else res.json(JSON.parse(data));
  });
});

app.listen(8000, () => console.log("Server running on port 3000"));
