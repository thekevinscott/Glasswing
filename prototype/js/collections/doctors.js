glasswing.collections.doctors = glasswing.collections.abstract.extend({
	model: glasswing.models.doctor,
	initialize : function() {
		// _(this).bindAll('add');

		/** initialize priors **/
		this.pa = new glasswing.collections.patients();

	},
	generateDoctors : function(worklist) {
		// var length = Math.round(Math.random()*2)+1;
		this.worklist = worklist;
		var length = Math.round(Math.random()*(worklist.exams.length/2));
		length++;
		length = 2; // 2 doctors
		for (var j=0;j<length;j++) {
			this.addRandomDoctor({worklist : worklist});
		}
	},
	addRandomDoctor : function(attb) {
		if (! attb) { attb = {}; }
		var gender = attb.gender || ((Math.round(Math.random())) ? 'male' : 'female');
		var first = this.pa.getRandomIngredient('first_'+gender);
		var last = this.pa.getRandomIngredient('last');
		this.add(new glasswing.models.doctor({
			first : first,
			last : last,
			worklist : attb.worklist
		}));
	}

});