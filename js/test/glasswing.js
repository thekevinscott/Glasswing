var should = chai.should();
describe("Application", function() {
  it("creates a global variable for its name space", function () {
    should.exist(glasswing);
  })
})