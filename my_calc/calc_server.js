const express = require("express");

var app = express();


app.get("/",(req,res)=>{
    var calci = req.query.calc;
    console.log(calci);
    calci = calci.split("");
    // myFunction(calci);
    res.send(calci)

})

app.listen(3000,()=>{
    console.log("App Running");
})




// function myFunction(a){
//     for(let i = 0;i<a.length;i++){

//     }
// }