let theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber)) {
  alert ("Your number is square root of " + theNumber * theNumber + " .");
} else {
  alert("That not a number.")
}

let numDo = -3;

do {
  console.log(numDo);
  numDo++;
} while (numDo <= 12);

while (numDo <= 12) {
  console.log(numDo);
  numDo = numDo + 2;
}

for (var i = 0; i <= 12; i++) {
  console.log(i);
}

switch (prompt("What the weathertoday", "")) {
  case "rainy":
    console.log("Don't forget your umbrella");
    break;
  case "clear":
    console.log("Have fun it's clear today");
    break;
  case cloudy:
    console.log("Get outside");
    break;
  default:
    console.log("Unknown wheather type");
}
