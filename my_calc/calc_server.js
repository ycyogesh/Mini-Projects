const express = require("express");

var app = express();


app.get("/",(req,res)=>{
    var calci = req.query.calc;
    calci = calci.split("")

    res.send(" "+calci)

})
