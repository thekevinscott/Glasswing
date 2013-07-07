glasswing.models.patient = glasswing.models.abstract.extend({
	defaults : {
		first : "",
		last : ""
	// content : '',
	},
	initialize : function() {
		if (! this.get("first")) { throw("First name must be specified"); }
		if (! this.get("last")) { throw("Last name must be specified"); }

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
	},
	getDob : function() {
		return this.get('dob').getMonth()+'/'+this.get('dob').getDate()+'/'+this.get('dob').getFullYear();
	}
});