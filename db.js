require("dotenv").config();
const mongoose = require("mongoose");

function initConnectionWithDB() {

  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  const connection = mongoose.connection;

  connection
    .once("open", () => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Connection failed with MongoDB");
    });
}

module.exports = initConnectionWithDB;
