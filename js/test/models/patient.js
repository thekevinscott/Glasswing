describe("Patient Model", function() {
	describe("Initialization", function() {
		it("should attach itself to glasswing model", function () {
		  	should.exist(glasswing.models.patient);
		})
  		it("should return the correct name", function () {

  			(new glasswing.models.patient()).getName().should.equal('');
  			(new glasswing.models.patient({first:"Bob"})).getName().should.equal('Bob');
  			(new glasswing.models.patient({last:"Barker"})).getName().should.equal('Barker');
  			(new glasswing.models.patient({first:"Bob",last:"Barker"})).getName().should.equal('Bob Barker');

		})



	})

})