const mongoose = require("mongoose");

const MONGO_USERNAME = process.env.MONGO_USERNAME || "sammy";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "sharkpass";
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || "mongo";
const MONGO_PORT = process.env.MONGO_PORT || "27017";
const MONGO_DB = process.env.MONGO_DB || "sharkinfo";

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
