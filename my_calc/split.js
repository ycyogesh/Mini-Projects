str = "3+5/66*6-8"
let op = str.split(/[0-9]/).filter(e => e!='')
let val = str.split(/[+*-/]/)
// str = str.split("")
// String.split()
console.log(op);
console.log(val);

for(let i = 0;i<op.length;i++){
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
   }
}
let a = val.length-1
console.log(a);
console.log(val);
console.log(val[a]);


// console.log(str);