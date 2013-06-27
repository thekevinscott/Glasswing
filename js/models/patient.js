(function($){
	glasswing.models.patient = Backbone.Model.extend({
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
	  }
	});
})(jQuery);