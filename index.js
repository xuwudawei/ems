const express = require("express");

const app = express();

app.get("/david", (req, res) => {
  res.status(200).send("Hello David!");
});

app.listen(6600, () => {
    console.log("Server is listening on port 6600");
});

