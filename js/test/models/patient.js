require(['models/patient'],function(patient){
	describe("Patient Model", function() {
		describe("Initialization", function() {

	  		it("should return the correct name", function () {

	  			(function () {
	  			  new patient();
	  			}).should.throw("First name must be specified");

	  			(function () {
	  			  new patient({last : "Barker"});
	  			}).should.throw("First name must be specified");

	  			(function () {
	  			  new patient({first : "Bob"});
	  			}).should.throw("Last name must be specified");

	  			(new patient({first:"Bob",last:"Barker"})).getName().should.equal('Bob Barker');

			})



		})

	})
})
