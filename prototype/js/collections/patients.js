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
		'Luetger','Todhunter','Lokhande','Koo',
		'Tucker','Briguglio','Roche','Gonzalez'
		],
	},
	initialize : function() {

		_(this).bindAll('add');

	},
	id_offset : 100100,
	add : function(model) {
		Backbone.Collection.prototype.add.call(this, model);

		if (! model.get('id')) {
			model.set('id',this.id_offset+this.length + Math.round(Math.random()*200000));
		}
	},
	generateRandomPatient : function() {
		var p = new glasswing.models.patient({
			first : this.getRandomIngredient('first'),
			last : this.getRandomIngredient('last'),
			dob : glasswing.randomDate(new Date(1940,0,1), new Date(2000,0,1)),
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
