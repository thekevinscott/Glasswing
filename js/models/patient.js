define([
	'underscore',
	'backbone'
], function(_, Backbone) {

	return Backbone.Model.extend({
		defaults : {
			first : "",
			last : ""
	    // content : '',
	  },
	  initialize : function() {
	  	if (! this.get("first")) { throw("First name must be specified"); }
	  	if (! this.get("last")) { throw("Last name must be specified"); }
	  	// console.log("I am a patient");
	  },
	  getName : function() {
	  	return (this.get("first") + " " + this.get("last")).trim();
	  },
	  getID : function() {
	  	return this.get('patient_id');
	  },
	  setID : function(patient_id) {
	  	if (! this.get('patient_id')) {
	  		this.set('patient_id',patient_id);
	  	}
	  }
	});
});

