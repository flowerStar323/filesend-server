const express = require("express");

const connectMongo = require("./db");
const fileUploadRouter = require('./uploads');

const app = express();

connectMongo();

app.use(fileUploadRouter);
app.use("/", express.static('../frontend/'));

app.listen(3000, () => {
    console.log("Up & Running");
});