glasswing.models.worklist = glasswing.models.abstract.extend({

	defaults : {
		name : 'Worklist'
	},
	initialize : function(attributes) {
		this.view = attributes.view;
	},
	// add : function(procedure) {

	// 	this.collection.add(procedure);

	// 	/// hmmm, this code should actually be in the model definition, not in the collection definition
	// 	if (! procedure.get('id')) {
	// 		procedure.set('id',this.collection.length);
	// 	}
	// },
	getProcedure : function(procedure_id) {
		return this.collection.get(procedure_id);
	},
	getProcedures : function() {
		return this.collection.models;
	},
	getProceduresByModality : function() {

		var procedures = {};
		$(this.getProcedures()).each(function(){
			var procedure_name = this.get('procedure_name');
			if (! procedures[procedure_name]) { procedures[procedure_name] = []; }
			procedures[procedure_name].push(this);
		});
		return procedures;
	}
});
