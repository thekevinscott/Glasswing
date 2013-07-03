define(['config'],function(config){

	describe("Config", function() {

	  it("should have a worklist", function () {
	  	config.worklist.should.exist;
	    // should.exist(glasswing);
	  });
	  it("should have chapters", function () {
	  	config.chapters.should.exist;
	  	// console.log(config.chapters);
	    // should.exist(glasswing);
	  });
	});
})