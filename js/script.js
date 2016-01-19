var triangleTracker = function(side1, side2, side3){
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    return "not a";
  } else if (side1 === side2 && side2 === side3){
    return "equilateral";
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}
