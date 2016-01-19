describe("triangleTracker", function(){
  it("is not  a triangle", function() {
    expect(triangleTracker(1, 2, 5)).to.equal("not a");
  });
  it("is equilateral if all sides are equal", function() {
    expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
  });
  it("is isosceles if two sides are equal, and the third side must be no more than the sum of the other two", function() {
    expect(triangleTracker(2, 2, 1)).to.equal("isosceles");
  });
  it("is a scalene triangle", function() {
    expect(triangleTracker(2, 3, 4)).to.equal("scalene");
  });
});
