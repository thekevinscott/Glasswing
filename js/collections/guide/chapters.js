glasswing.collections.guide.chapters = Backbone.Collection.extend({
	model: glasswing.models.guide.chapter,
	initialize : function(config) {
		_(this).bindAll('add');

	},
	add : function(model) {

	},
});