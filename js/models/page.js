define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	return Backbone.Model.extend({
	  defaults : {
	    // content : '',
	  },
	  initialize : function(attributes) {

	  	// console.log(attributes);
	    // we must have a patient
	    // this.patient = options.patient;
	  }
	});
});