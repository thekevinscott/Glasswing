(function($){
	glasswing.models.patient = Backbone.Model.extend({
		defaults : {
			first : "",
			last : ""
	    // content : '',
	  },
	  initialize : function() {
	  	// console.log("I am a patient");
	  },
	  getName : function() {
	  	return this.get("first") + " " + this.get("last");
	  }
	});
})(jQuery);