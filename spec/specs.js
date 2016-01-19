describe("triangleTracker", function(){
  it("is a triangle", function() {
    expect(triangleTracker(1, 2, 5)).to.equal("not a triangle");
  });
  it("is equilateral if all sides are equal", function() {
    expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
  });
  it("is isosceles if two sides are equal, and the third side must be no more than the sum of the other two", function() {
    expect(triangleTracker(2, 2, 1)).to.equal("isosceles");
  });
});
