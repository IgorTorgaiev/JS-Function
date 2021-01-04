// alert

function theFunction() {
    alert("You are studying the functions topic");
}
theFunction();

// function return


var c = myFunction(10,5);
document.getElementById("demo1").innerHTML = c;
function myFunction(a,b){
    return a + b;
}

// one more function return

function otherFunction() {
    return "I love JavaScript";
}
document.getElementById("demo2").innerHTML = otherFunction();

// Local Variables

isFunction();

function isFunction() {
    var person = "Engineer";
    document.getElementById("demo3").innerHTML =
    typeof person + " and " + person;
}

thisFunction();
function thisFunction() {
    var theWorker = "programmer";
    document.getElementById("demo4").innerHTML =
    typeof theWorker + " " + theWorker;
}

document.getElementById("demo5").innerHTML = typeof theWorker;