/*function sayHelloToClosures(yourName) {
  var text = 'Hello Closures from ' + yourName;
  var sayAlert = function() { alert(text); }
  sayAlert();
}
console.log("aaa");
sayHelloToClosures("Ahmad");

function outerFunction(x) {
  var z = 3;
  return function (y) {
    alert(x + " " + y + " " + " " + z);
  }
}
var innerFunction = outerFunction(5); // innerFunction is now a closures.
innerFunction(4);

function outerFunction(x) {
  var z = 3;
  return function (y) {
    x=x+1;//x++
    alert(x + y + z);
  }
}
var myVal = new Number(2);
var innerFunction = outerFunction(myVal); // innerFunction is now a closures.
innerFunction(10); //will alert 16
innerFunction(10); //will alert 17
innerFunction(10); //will alert 18


var myFunctions = {};
for (var i = 0; i < 3; i++) {      // let's create 3 functions
    myFunctions[i] = function() {  // and store them in myFunctions
        console.log("My value: " + i); // each should log its value.
    };
}
for (var j = 0; j < 3; j++) {
    myFunctions[j]();              // and now let's run each one to see
}


var myFunctions= [];

function createMyFunction(i) {
    return function() {
           console.log("My value: " + i);
    };
}

for (var i = 0; i < 3; i++) {
    myFunctions[i] = createMyFunction(i);
}

for (var j = 0; j < 3; j++) {
    myFunctions[j]();    // and now let's run each one to see
}*/
/*loop: for (var i = 0; i < 5; i++) {
  if (true) {
    console.log("asdassd");
    break;
    console.log(i);

  }
}

let topic = {
  lesson: "js type",
  number: 50.5781212,
  head: false
};
topic.author = "ahmad saadeddin";
topic.contents = {};
numberOfTopic = parseFloat(topic.number,1),
console.log(typeof topic.number);
console.log(numberOfTopic);
console.log(topic.author);
console.log(topic.contents);

let points = [
  {x:0, y:1},
  {a:100, b:1000}
];

console.log(points[0]);
*/
let timesTamp = document.getElementById("timesTamp");
timesTamp.onload = function () {this.innerHTML = new Date().toString();};
/*console.log(timesTamp.firstChild);
if(timesTamp.secondChild == null ){
  timesTamp.appendChild(document.createTextNode(new Date().toString()));
}
timesTamp.style.color = "green";
console.log(timesTamp.style.color);

console.log(timesTamp.secondChild);*/
