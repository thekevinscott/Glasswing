define([
	'underscore',
	'backbone',
	'collections/procedures'
], function(_, Backbone, procedures) {

	return Backbone.Model.extend({

		defaults : {
	    	name : 'Worklist',
		  	associated_page_view : 'worklist'

	  	},
	  	initialize : function() {
	  		this.collection = new procedures();
	  	},
	  	add : function(procedure) {

	  		this.collection.add(procedure);

	  		/// hmmm, this code should actually be in the model definition, not in the collection definition
	  		if (! procedure.get('id')) {
	  			procedure.set('id',this.collection.length);
	  		}
	  	},
	  	getProcedure : function(procedure_id) {
	  		return this.collection.get(procedure_id);
	  	},
	  	getProcedures : function() {
	  		return this.collection.models;
	  	}
	});

});