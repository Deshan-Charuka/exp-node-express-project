const http = require("http");

//export the express package
const express = require("express");

//use the e function which is inside in the express package
const app = express();

//middleware function 01
app.use((req, res, next) => {
  console.log("Request handler 01");
  next();
});
//middleware function 02
app.use((req, res, next) => {
  console.log("Request handler 02");
});

const server = http.createServer(app);

server.listen(3000);
