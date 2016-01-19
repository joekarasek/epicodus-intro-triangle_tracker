describe("triangleTracker", function(){
  it("is equilateral if all sides are equal", function() {
    expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
  });
  it("is isosceles if two sides are equal, and the third side must be no more than the sum of the other two", function() {
    expect(triangleTracker(2, 2, 1)).to.equal("isosceles");
  });
});
