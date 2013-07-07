glasswing.models.prior = glasswing.models.abstract.extend({
	initialize : function(attributes) {

	},
	getDate : function() {
		return this.get('date').getMonth()+'/'+this.get('date').getDate()+'/'+this.get('date').getFullYear();
	}

});