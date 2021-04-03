const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
var exphbs = require("express-handlebars");

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partialsDir"),
  })
);

app.set("view engine", ".hbs");
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/signin", (req, res) => {
  res.render("signin");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/users", (req, res) => {
  res.render("users");
});
app.listen(port);
