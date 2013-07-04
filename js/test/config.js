describe("Config", function() {

	it("should have a worklist", function () {
		should.exist(glasswing.config);
		glasswing.config.worklist.should.exist;
		glasswing.config.worklist.procedures.should.exist;
	// should.exist(glasswing);
	});
	it("should have chapters", function () {
		glasswing.config.chapters.should.exist;
	});
});