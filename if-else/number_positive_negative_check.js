//v1
var number = 50;
if (number > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

//v2
var numberTwo = -564;
if (numberTwo > 0) {
  console.log("Positive");
} else if (numberTwo < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//v3
// == শুধু value check করে & type convert করে নেয়
// === value + type দুটোই check করে
var numberThree = -54;
if (numberThree === 0) {
  console.log("Zero");
} else if (numberThree > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}