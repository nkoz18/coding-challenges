var reverse = function(x) {

    x = x.toString()

    var sign = "";

    console.log(x[0]);

    if(x[0] === "-"){
        sign = "-";
        x = x.slice(1);
    }

    return Number(sign + x.toString().split("").reverse().join(""));

};

console.log(reverse(-301));
