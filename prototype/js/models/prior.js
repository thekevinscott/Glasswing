glasswing.models.prior = glasswing.models.abstract.extend({
	initialize : function() {

	},
	getDate : function() {
		return this.get('date').getMonth()+'/'+this.get('date').getDate()+'/'+this.get('date').getFullYear();
	}

});