glasswing.models.caregiver = glasswing.models.abstract.extend({
  	initialize : function(data) {

	},
	getName : function() {
		return this.get('first')+' '+this.get('last')
	}
});