let a = "3+5-5"
let count = 0


var v = ""
var v1 = 0
for (i = 0; i < a.length; i++) {
    if (a[i] >= "0" && a[i] <= "9") {
        v += a[i]
        console.log("v----->", v);
    }
    else {
        count++
        if (count % 2 == 0) {
            console.log("operator part---------->");
            
            v1 = opEval(opt, v1, v)
            v =""
        }
        else {
            v1 = +v
            v = ""
            console.log("v1------->", v1, "v--------->", v);
        }
        var opt = a[i]
        console.log("opertaor", opt);
    }
}


function opEval(opt, v1, v){
    if (opt == "+") {
        v1 = +v1 + +v
    }
    else if (opt == "-") {
        v1 = +v1 - +v
    }
    else if (opt == "*") {
        v1 = +v1 * +v
    }
    else if (opt == "/") {
        v1 = +v1 / +v
    }
    else if (opt == "%") {
        v1 = +v1 % +v
    }
    else {
        console.log("Nothing Matched");
    }
    return v1
}


console.log("answer", opEval(opt, v1, v));