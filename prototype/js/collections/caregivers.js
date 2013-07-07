glasswing.collections.caregivers = Backbone.Collection.extend({
	model: glasswing.models.caregiver,
	initialize : function(config) {
		_(this).bindAll('add');

	},
	add : function(model) {

	},
});