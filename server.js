const express = require("express");
require('dotenv/config');

const app = express();
// console.log(app);
// const PORT = 6900;

const testRoutes = require('./routes/testRoutes');
app.get("/", (req, res) => {
  res.status(200);
  res.json({
    name: "Ansar"
  })
//   res.send("Welcome to root URL of Server");
});

app.use('/test', testRoutes)

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log("server is running on Port = " + process.env.PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
