define([
	'underscore',
	'backbone',
	'models/page'
], function(_, Backbone, page) {

	return Backbone.Model.extend({

		defaults : {
	    	name : 'Worklist',
	  	},
	  	initialize : function(attributes) {
	  	}
	});

});