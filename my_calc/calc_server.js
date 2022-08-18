const express = require("express");

var app = express();


app.get("/",(req,res)=>{
    var calci = req.query.calc;
    // console.log(req.query.calc);
    var answer = myFunction(calci);
    console.log(answer);
    res.send(""+answer)
    // res.send()

})

app.listen(3000,()=>{
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
console.log(val);
let c = +(val.length-2) //-1 for without quotes
// console.log(c);
let value = +val[c]
// console.log(value);
return value
}