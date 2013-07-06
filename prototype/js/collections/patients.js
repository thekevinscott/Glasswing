glasswing.collections.patients = Backbone.Collection.extend({
	model: glasswing.models.patient,
	ingredients : {
		first : [
		'Kelsey','Nancy','Mark','Kevin','Ben', // glasswing
		'Michelle','Gina','Puja','Jon','Phil', // spark
		'Charles','Parker','Nandhita','Min','Rebecca', // momo
		'John','Jason','Jonas','Arthur','Rebecca', // zephyr
		'Paul','Auldyn','KeVon','Nina','Stephanie', // solidus
		'Michael','Nishita','Ying','Debra','Kelsey', // wanderlust
		'Luis','Alina','Chaiyawut','Truc', // glace
		'Dave','Ian','Kiran','Sebon', // eaton
		'Judith', 'Louise', 'Doug', 'Juan' // crosslands
		],
		last : [
		'Stroshane','Chen','Baldwin','Scott','Margines',
		'Lew','Assaf','Agarwal','Chan','Legros',
		'Aweida','Bossier','Kumar','Xao','Chen',
		'Rogers','Block','Gebhardt','Hong','Jablonsky',
		'Mandel','Matthews','Ticer','Wong','Butler',
		'Helmbrecht','Muhnot','Wang','Gladwin','Humphries',
		'Luetger','Todhunder','Lokhande','Koo',
		'Tucker','Briguglio','Roche','Gonzalez'
		],
	},
	initialize : function() {

		_(this).bindAll('add');

	},
	id_offset : 200100,
	add : function(model) {
		Backbone.Collection.prototype.add.call(this, model);
		if (! model.get('id')) {
			model.set('id',this.id_offset+this.length);

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
