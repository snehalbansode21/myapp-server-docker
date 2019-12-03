const express = require("express");
const app = express()
const categoryrouter = require("./routes/category");
//const bodyParser = require("body-parser")


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//app.use(bodyParser.json())

app.use("/category",categoryrouter);


app.get("/",(request,response)=>{
    response.send("Welcome to backend");
})

app.listen(9898,'0.0.0.0',() => {
    console.log("Server started at port 9898");
})