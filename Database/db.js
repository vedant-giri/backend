require("dotenv").config();
const mongoose = require("mongoose");
// const mongoURI = process.env.MONGODB_URI;

const connectToMongo = () => {
  mongoose
    .connect("mongodb+srv://vedantgiri:collegemanagementpassword@cluster0.re2xmmd.mongodb.net/", { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = connectToMongo;
