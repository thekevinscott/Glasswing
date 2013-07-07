glasswing.collections.procedures = Backbone.Collection.extend({
	tagName : 'tr',
	className : 'procedure',

	initialize : function(attributes) {
		// this.view = attributes.view;
		_(this).bindAll('add');
	},

	ingredients : {
		procedure_name : ['CT ABD', 'CR R LEG', 'MR ABD', 'CR L LEG', 'MR R LEG', 'MR L LEG'],

		hospital : ['Mercy','Northwestern','Good Heart','Great Lake','Advocate','Shepherd','Good Shepherd','Murphy']
	},
	add : function(procedureModel) {

		Backbone.Collection.prototype.add.call(this, procedureModel);

		if (! procedureModel.get('id')) { procedureModel.set('id',this.models.length); }

		procedureModel.view.render();

		if (this.view.$target) {
			// optionally, if our parent table is available, render to it
			this.view.$target.append(procedureModel.view.render().$el);
		}

	},
	getProcedure : function(procedure_id) {
		return this.get(procedure_id);
	},
	getProcedures : function() {
		// console.log('get procedure!');
		return this.models;
	},
	getProceduresByModality : function() {

		var procedures = {};
		$(this.getProcedures()).each(function(){
			var procedure_name = this.get('procedure_name');
			if (! procedures[procedure_name]) { procedures[procedure_name] = []; }
			procedures[procedure_name].push(this);
		});
		return procedures;
	},
	getRandomProcedure : function(patient) {
		var p = new glasswing.collections.patients();
		var caregivers = new glasswing.collections.caregivers();
		var length = Math.round(Math.random()*8)+2;
		for (var i=0;i<length;i++) {
			var first = p.getRandomIngredient('first');
			var last = p.getRandomIngredient('last');
			caregivers.add(new glasswing.models.caregiver({
				role : 'Resident',
				phone : '123-123-1234',
				pager :'123-123-1234',
				email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+this.getRandomIngredient('hospital').toLowerCase()+'.com',
				date : new Date('6/5/2013'),
				first : first,
				last : last,
				backup : p.getRandomIngredient('first') +' ' + p.getRandomIngredient('last')
			}));
		}
		return new glasswing.models.procedure({
			patient : patient,
			scanned_documents : Math.round(Math.random()*10),
			referring_physician : 'Thompson',
			date : glasswing.randomDate(),
			procedure_name : this.getRandomIngredient('procedure_name'),
			priority : 2,
			procedure_class : '-',
			report_status : 'Unread',
			procedure_status : 'Comp.',
			referring_physician : p.getRandomIngredient('first')+ ' ' + p.getRandomIngredient('last'),
			hospital_name : this.getRandomIngredient('hospital'),
			caregivers : caregivers
		});
	},
	getRandomIngredient : function(key) {
		return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
	}

});
