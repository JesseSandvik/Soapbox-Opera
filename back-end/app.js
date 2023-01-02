const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.json("Hello world!");
});

app.listen(port, () => {
    console.log(`[Server]: Server is currently running on port ${port}...`);
});
