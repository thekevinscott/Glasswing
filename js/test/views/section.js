require(['views/guide/section'],function(procedure){
	describe("Section View", function() {
		describe("Initialization", function() {
	  		it("should throw error if no patient is specified", function () {
	  			(function () {
	  			  new procedure();
	  			}).should.throw("No patient specified!'");
			})
		})
	})
})