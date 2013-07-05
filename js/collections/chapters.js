glasswing.collections.chapters = Backbone.Collection.extend({
	model: glasswing.models.chapter,
	initialize : function(config) {
		_(this).bindAll('add');

	},
	add : function(model) {

	},
});