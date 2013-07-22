glasswing.collections.patients = Backbone.Collection.extend({
	model: glasswing.models.patient,
	ingredients : {
		first_female : [
		'Kelsey','Nancy',
		'Michelle','Gina','Puja',
		'Nandhita','Min','Rebecca', // momo
		'Rebecca', // zephyr
		'Auldyn','Nina','Stephanie', // solidus
		'Nishita','Ying','Debra','Kelsey', // wanderlust
		'Alina','Truc', // glace
		'Kiran',
		'Judith', 'Louise',
		],
		first_male : [
		'Mark','Kevin','Ben', // glasswing
		'Jon','Phil', // spark
		'Charles','Parker',
		'John','Jason','Jonas','Arthur',
		'Paul','KeVon',
		'Michael',
		'Luis','Chaiyawut',
		'Dave','Ian','Sebon', // eaton
		'Doug', 'Juan' // crosslands
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
		var gender = (Math.round(Math.random())) ? 'male' : 'female';
		var p = new glasswing.models.patient({
			first : this.getRandomIngredient('first_'+gender),
			last : this.getRandomIngredient('last'),
			dob : glasswing.randomDate(new Date(1940,0,1), new Date(2000,0,1)),
			gender : (gender === 'male') ? 'm' : 'f',
			risks : '-'
		});
		this.add(p);
		return p;


	},
	getRandomIngredient : function(key) {

		if (key=='first') { key += (Math.round(Math.random())) ? '_male' : '_female'; }

		return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
	},
	getAvatar : function(gender, count) {
		count = (count % 2) + 1;

		return 'images/avatars/'+gender+'-'+count+'.png';
	}


});
