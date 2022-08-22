const express = require("express");
// const fetch = require('node-fetch');

const cors = require('cors')

// var corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
// }
var app = express();
app.use(cors());

// app.use(cors({
//     origin: '*'
// }));

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5501');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//     next();
// })

// app.use(function(req, res, next) {
//     console.log("dsdfdsfdsfds",req.query.calc)
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


app.get("/",(req,res)=>{
    console.log("insidse get");
    var calci = req.query.calci;
    // console.log(req.query.calc);
    var answer = myFunction(calci);
    console.log(answer);
    // res.send(""+answer)
    res.json({"ans": answer})
    // res.send()

})

app.listen(3001,()=>{
    console.log("App Running");
})



function myFunction(a){
let op = a.split(/[0-9]/).filter(e => e!='')
let val = a.split(/[+*-/'"%]/)

for(let i = 0;i<val.length;i++){
   if(op[i]=="+"){
    val[i+1] = +val[i] + +val[i+1]
   }
   else if(op[i]=="*"){
    val[i+1] = +val[i] * +val[i+1]
   }
   else if(op[i]=="-"){
    val[i+1]= +val[i] - +val[i+1]
   }
   else if(op[i]=="/"){
    val[i+1] = +val[i] / +val[i+1]
   }
   else if(op[i]=="%"){
    val[i+1]= +val[i] % +val[i+1]
   }else{
    // console.log("Check Operator");
   }
}
// console.log(val);
let c = +(val.length-1) //-1 for without quotes
// console.log(c);
let value = +val[c]
// console.log(value);
return value
}