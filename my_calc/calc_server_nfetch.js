const express = require("express");
const fetch = require('node-fetch');

var app = express();


app.get("/", (req, res) => {
    var calci = req.query.calc;
    // console.log(req.query.calc);
    var answer = myFunction(calci);
    console.log(answer);
    res.send("" + answer)

})

app.listen(3000, () => {
    console.log("App Running");
})




function myFunction(a) {

    let count = 0
    var v = ""
    var v1 = 0
    for (i = 0; i < a.length; i++) {
        if (a[i] >= "0" && a[i] <= "9") {
            v += a[i]
        }
        else {
            count++
            if (count % 2 == 0) {
                v1 = opEval(opt, v1, v)
                v = ""
            }
            else {
                v1 = +v
                v = ""
            }
            var opt = a[i]
        }
    }
    return v1
}

function opEval(opt, v1, v) {
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