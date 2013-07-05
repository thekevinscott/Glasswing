glasswing.collections.procedures = Backbone.Collection.extend({
	tagName : 'tr',
	className : 'procedure',

	initialize : function(attributes) {
		// console.log('*** we initialize our collection');
		// this.view = attributes.view;
		// this.parent = attributes.parent;
		_(this).bindAll('add');
	},

	ingredients : {
		procedure_name : ['CT ABD', 'CR R LEG', 'MR ABD', 'CR L LEG', 'MR R LEG', 'MR L LEG'],
		last : ['Strosahen','Chen','Baldwin','Scott','Margines','Lew','Assaf','Chan','Aweida','Bossier','Kumar','Xao','Rogers','Block','Gebhardt','Mandel','Ticer','Butler'],
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

		procedureModel.collection = this;

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
		return new glasswing.models.procedure({
			patient : patient,
			attachments : Math.round(Math.random()*10),
			referring_physician : 'Thompson',

			procedure_name : this.getRandomIngredient('procedure_name'),
			priority : Math.round(Math.random()*4),
			procedure_class : '-',
			report_status : 'Unread',
			procedure_status : 'Comp.',
			referring_physician : this.getRandomIngredient('last'),
			hospital_name : this.getRandomIngredient('hospital'),
			images : 5
		});
	},
	getRandomIngredient : function(key) {
		return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
	}

});