const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config")
const port = process.env.PORT;

app.use(bodyParser.json());

// import routes
const userRoute = require("./routes/user");
const gearSetRoute = require("./routes/gearset");
const teamRoute = require(`./routes/team`)
const memberRoute = require(`./routes/member`)

app.use("/users", userRoute);
app.use("/gearsets", gearSetRoute);
app.use(`/teams`, teamRoute)
app.use(`/members`, memberRoute)

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home!");
});

// connect to DB
mongoose.connect(process.env.DB_URI, () => {
    console.log('connected to the db!')
});

// PRODUCTION PORT
// app.listen(port, () => {
//   console.log("listening on port " + port);
// });

// DEV PORT
app.listen(4741, () => console.log(`ex app lsitening on 4741`))