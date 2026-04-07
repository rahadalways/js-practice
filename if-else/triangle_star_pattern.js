//1
var x = 10;
for (var i = 1; i <= x; i++) {
  var star = "*";
  console.log(star.repeat(i));
}

//2
var xx = 10;
for (var ii = 1; ii <= xx; ii++) {
  var starTwo = "*";
  var space = " ";
  console.log(space.repeat(xx - ii) + starTwo.repeat(ii));
}
console.log("==========");

//3
var y = 1;
for (var j = 10; j >= y; j--) {
  var starThree = "*";
  console.log(starThree.repeat(j));
}

//4
var yy = 10;
for (var jj = yy; jj >= 1; jj--) {
  var startFour = "*";
  var spaceTwo = " ";
  console.log(spaceTwo.repeat(yy - jj) + startFour.repeat(jj));
}
