str = "3+5-5+5"
const op = ["+", "-", "*", "/", "%"]

// let op = str.split(/[0-9]/).filter(e => e!='')
// let val = str.split(/[+*-/]/)
// // str = str.split("")
// // String.split()
// console.log(op);
// console.log(val);

// for(let i = 0;i<op.length;i++){
//    if(op[i]=="+"){
//     val[i+1] = +val[i] + +val[i+1]
//    }
//    else if(op[i]=="*"){
//     val[i+1] = +val[i] * +val[i+1]
//    }
//    else if(op[i]=="-"){
//     val[i+1]= +val[i] - +val[i+1]
//    }
//    else if(op[i]=="/"){
//     val[i+1] = +val[i] / +val[i+1]
//    }
//    else if(op[i]=="%"){
//     val[i+1]= +val[i] % +val[i+1]
//    }else{
//    }
// }
// let a = val.length-1
// console.log(a);
// console.log(val);
// console.log(val[a]);


// // console.log(str);


let a = str //.split("")
let temp = ""
let temp1 = ""

let total = 0
let count = 1
// console.log(a);

// for(let i = 0;i<str.length;i++){
//    if(str[i]>='0' && str[i]<='9'){
//       temp += str[i];
//       for(let j = 0;j<op.length;j++){
//          if(str[i+1]==op[j]){
//             switch (op[j]) {
//                case "+":
//                   temp1 = str[i+2]
//                   k = i+2
//                   if(str[i+3]>="0" && str[i+3]<="9"){
//                         temp1+=str[i+3]
//                         k = i+3
//                   }
//                   temp1 = +temp + +temp1
//                   temp =  0
//                   break;
//                case "-":
//                   temp1 = str[i+2]
//                   k = i+2
//                   if(str[i+3]>="0" && str[i+3]<="9"){
//                         temp1+=str[i+3]
//                         k = i+3
//                   }
//                   temp1 = +temp - +temp1
//                   temp = 0
//                   break;
//                case "*":
//                   temp1 = str[i+2]
//                   k = i+2
//                   if(str[i+3]>="0" && str[i+3]<="9"){
//                         temp1+=str[i+3]
//                         k = i+3
//                   }
//                   temp1 = +temp * +temp1
//                   temp = 0
//                   break;
//                case "/":
//                   temp1 = str[i+2]
//                   k = i+2
//                   if(str[i+3]>="0" && str[i+3]<="9"){
//                         temp1+=str[i+3]
//                         k = i+3
//                   }
//                   temp1 = +temp / +temp1
//                   temp = 0
//                   break;
//                case "%":
//                   temp1 = str[i+2]
//                   k = i+2
//                   if(str[i+3]>="0" && str[i+3]<="9"){
//                         temp1+=str[i+3]
//                         k = i+3
//                   }
//                   temp1 = +temp % +temp1
//                   temp = 0
//                   break;
//                default:
//                   break;
//             }
//          }
//          // k = i
//          break;
//       }
//    }
//    else{

//    }
// }
// console.log(temp1);


var v = ""
var v1 = 0
for (i = 0; i < a.length; i++) {
   if (a[i] >= "0" && a[i] <= "9") {
      v += a[i]
      console.log("v----->", v);
   }
   else {
      count++
      console.log("opertaor", opt);
      if (count % 2 == 0) {
         console.log("operator ---------->");
         if(opt == "+"){
               v1 = +v1 + +v
               console.log("add", v1,v);
               v = ""
               break;
         }
         else if(opt == "-"){
               v1 = +v1 - +v
               console.log("sub", v1,v);
               v = ""
               break;
         }
         else if(opt == "*"){
               v1 = +v1 * +v
               console.log("mul", v1,v);
               v = ""
               break;
         }
         else if(opt == "/"){
               v1 = +v1 / +v
               console.log("div", v1,v);
               v = ""
               break;
         }
         else if(opt == "%"){
               v1 = +v1 % +v
               console.log("div", v1,v);
               v = ""
               break;
         }
         else{
            v1 = v
            v = ""
            console.log("v1------->", v1, "v--------->", v);
         }
         }
      var opt = a[i]
   }
}


console.log("answer", v1);
