//export the express package
const express = require("express");

//use the e function which is inside in the express package
const app = express();

//middleware function 01 | Common middleware (All the requests will go through this..)
app.use('/',(req, res, next) => {
  console.log("Request handler 01");
  next(); //allows the request to continue next middleware on the line
});
//middleware function 02
app.use('/add-product',(req, res, next) => {
  console.log("Request handler 02");
  res.send("<h1>Add Product Page</h1>"); //sending the response
});

//middleware function 03
app.use('/',(req, res, next) => {
  console.log("Request handler 03");
  res.send("<h1>Hello from expressJS!</h1>"); //sending the response
});

//newer way of server listening using express
app.listen(3000);
