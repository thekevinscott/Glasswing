(function($){

	glasswing.models.procedure = Backbone.Model.extend({
	  defaults : {
	    // content : '',
	  },
	  initialize : function(attributes) {
	  	//console.log(attributes);
	    // we must have a patient
	    if (! attributes || ! attributes.patient) {throw "No patient specified!";}
	    // this.patient = options.patient;
	  }
	});
})(jQuery);