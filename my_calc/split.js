str = "3+5/66*6-8"
let op = str.split(/[0-9]/).filter(e => e!='')
let val = str.split(/[+*-/]/)
var sum = 0
// str = str.split("")
// String.split()
console.log(op);
console.log(val);

for(let i = 0;i<str.length;i++){
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
    console.log("Check Operator");
   }
}
console.log(sum);


// console.log(str);