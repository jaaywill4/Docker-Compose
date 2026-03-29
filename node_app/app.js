const express = require("express");
const path = require("path");
const db = require("./db");
const sharkController = require("./controllers/sharks");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sharks", sharkController.index);
app.post("/sharks/addshark", sharkController.addShark);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
