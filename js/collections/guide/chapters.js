define([
	'underscore',
	'backbone',
	'models/guide/chapter',
], function(_, Backbone, chapterModel) {

	return Backbone.Collection.extend({
		model: chapterModel,
		initialize : function(config) {
			console.log(config);
			_(this).bindAll('add');

		},
		add : function(model) {

		},
	});
});
