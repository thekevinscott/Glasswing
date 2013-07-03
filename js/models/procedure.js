glasswing.models.procedure = glasswing.models.abstract.extend({
	defaults : {
		// content : '',
		associated_page_view : 'report'
	},
	initialize : function(attributes) {
		//console.log(attributes);
		// we must have a patient
		// console.log(attributes);
		if (! attributes || ! attributes.patient) {throw "No patient specified!";}
		// this.patient = options.patient;
	},
	// we overload our parent get function
	get: function (attr) {
		switch(attr) {
			case 'name' :
				return this.get('patient').getName();
			break;
			default :
	  			return Backbone.Model.prototype.get.call(this, attr);
			break;
		}

	}
});