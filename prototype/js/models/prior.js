glasswing.models.prior = glasswing.models.abstract.extend({
	initialize : function(attributes) {
		if (! this.get('relevant')) { this.set('relevant',false); }
	},
	getDate : function() {
		return this.get('date').getMonth()+'/'+this.get('date').getDate()+'/'+this.get('date').getFullYear();
	}

});