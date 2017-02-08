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
