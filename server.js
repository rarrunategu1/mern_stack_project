const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Server static assets if in production
//check to see if on our server on heroku
if (process.env.NODE_ENV === "production") {
  //set static folder to my-app build
  app.use(express.static("my-app/build"));
  //for any route that it finds it will load the react index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "my-app", "build", "index.html"));
  });
}

const port = process.env.PORT || port; //server checks for port or goes to port number 5000

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
