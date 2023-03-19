const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const booksRouter = require("./routes/books");
const routeauth = require("./routes/auth");
const { getHomePage } = require("./controllers/books");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", getHomePage);

app.use("/books", booksRouter);


app.use("/auth", routeauth);

app.get("/auth/login", (req, res) => {
  res.render("login");
});

app.use("/auth/register", (req, res, next) => {
  res.render("register");
});
app.get("/contact", (req, res, next) => {
  res.send("contact");
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    app.listen(PORT, () =>
      console.log(
        `Server connected in http://localhost:${PORT} in (${ENV} mode)\nDB CONNECTED`
      )
    );
  } catch (err) {
    console.log(err);
  }
};
db();
