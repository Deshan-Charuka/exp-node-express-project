//export the express package
const express = require("express");
const bodyParser = require("body-parser");

//use the e function which is inside in the express package
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//middleware function 02
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>'
  ); //sending the response
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

//middleware function 01 | Common middleware (All the requests will go through this..)
app.use("/", (req, res, next) => {
  next(); //allows the request to continue next middleware on the line
});

//middleware function 03
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from expressJS!</h1>"); //sending the response
});

//newer way of server listening using express
app.listen(3000);
