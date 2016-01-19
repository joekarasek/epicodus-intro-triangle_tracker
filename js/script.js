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
};

$(document).ready(function() {

  $("form").submit(function(event){
    // alert("first");
    var side_1 = parseInt($("input[name='side1']").val());
    var side_2 = parseInt($("input[name='side2']").val());
    var side_3 = parseInt($("input[name='side3']").val());
    // alert("second");
    $("#triangleResult").text(triangleTracker(side_1, side_2, side_3));
    event.preventDefault();
    // alert("third-last");
  });

});
