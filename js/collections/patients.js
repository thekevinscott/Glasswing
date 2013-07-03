glasswing.collections.patients = Backbone.Collection.extend({
	model: glasswing.models.patient,
	ingredients : {
		first : ['Kelsey','Nancy','Mark','Kevin','Ben','Michelle','Gina','Puja','Jon','Phil','Charles','Parker','Nandhita','Min','Rebecca','John','Jason','Jonas','Arthur','Paul','Auldyn','KeVon','Nina','Stephanie'],
		last : ['Stroshane','Chen','Baldwin','Scott','Margines','Lew','Assaf','Chan','Aweida','Bossier','Kumar','Xao','Rogers','Block','Gebhardt','Mandel','Ticer','Butler'],
	},
	initialize : function() {

		_(this).bindAll('add');

	},
	id_offset : 200100,
	add : function(model) {
		Backbone.Collection.prototype.add.call(this, model);
		if (! model.get('id')) {
			model.set('id',this.id_offset+this.length);
			// console.log(this.models);
			// console.log(model.get('id'));
		}
	},
	generateRandomPatient : function() {
		var p = new glasswing.models.patient({
			first : this.getRandomIngredient('first'),
			last : this.getRandomIngredient('last'),
			dob : 'dob',
			gender : (Math.round(Math.random())) ? 'm' : 'f',
			risks : '-'
		});
		this.add(p);
		return p;


	},
	getRandomIngredient : function(key) {
		return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
	}


});
