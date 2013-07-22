glasswing.collections.caregivers = Backbone.Collection.extend({
	model: glasswing.models.caregiver,
	initialize : function(config) {
		// _(this).bindAll('add');

		/** initialize priors **/
		this.pa = new glasswing.collections.patients();
		this.pr = new glasswing.collections.procedures();
		this.gender_count = {male : Math.round(Math.random()), female : Math.round(Math.random())};
	},
	generateRandomArray : function(length) {
		this.addRandomCaregiver({role : 'Referring Physician'});


		// var length = Math.round(Math.random()*2)+1;
		for (var j=0;j<length;j++) {
			this.addRandomCaregiver();

		}

	},
	addRandomCaregiver : function(attb) {
		if (! attb) { attb = {}; }
		var gender = attb.gender || ((Math.round(Math.random())) ? 'male' : 'female');
		var first = this.pa.getRandomIngredient('first_'+gender);
		var last = this.pa.getRandomIngredient('last');
		var role = attb.role || this.pr.getRandomIngredient('role');
		this.add(new glasswing.models.caregiver({
			role : role,
			phone : '860-460-8183',
			pager :'860-460-8183',
			email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+this.pr.getRandomIngredient('hospital').toLowerCase()+'.com',
			date : new Date('6/5/2013'),
			first : first,
			last : last,
			gender : gender,
			avatar : this.pa.getAvatar(gender,this.gender_count[gender]++),
			backup : this.pa.getRandomIngredient('first') +' ' + this.pa.getRandomIngredient('last')
		}));
	}

});