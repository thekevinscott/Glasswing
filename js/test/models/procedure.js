describe("Procedure Model", function() {
	describe("Initialization", function() {
		it("should attach itself to glasswing model", function () {
		  	should.exist(glasswing.models.procedure);
		})
  		it("should throw error if no patient is specified", function () {
  			(function () {
  			  new glasswing.models.procedure();
  			}).should.throw("No patient specified!'");
		})
	})
})