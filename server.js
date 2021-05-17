require("dotenv").config();
const path = require("path")


const express = require("express");
const app = express();
const mongoose = require("mongoose")

// mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("connected to db"))

app.use(express.json());

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(3000, () => console.log("server started on port 3000"));