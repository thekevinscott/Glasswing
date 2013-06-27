describe("Patient Model", function() {
	describe("Initialization", function() {
		it("should attach itself to glasswing model", function () {
		  	should.exist(glasswing.models.patient);
		})
  		it("should return the correct name", function () {

  			(function () {
  			  new glasswing.models.patient();
  			}).should.throw("First name must be specified");

  			(function () {
  			  new glasswing.models.patient({last : "Barker"});
  			}).should.throw("First name must be specified");

  			(function () {
  			  new glasswing.models.patient({first : "Bob"});
  			}).should.throw("Last name must be specified");

  			(new glasswing.models.patient({first:"Bob",last:"Barker"})).getName().should.equal('Bob Barker');

		})



	})

})