define([
	'underscore',
	'backbone',
], function(_, Backbone) {
	var view = Backbone.View.extend({
		tagName : 'div',
		initialize : function(attributes) {
			this.tabManager = attributes.tabManager;
			if (! this.model) { throw("You must specify a model"); }
			this.name = 'Default';
			this.url = '';
		},
		setOptions : function(options) {
			// fill me out
		},
		render : function() {
			this.delegateEvents();
			return this;
		}

	});
	return view;
});
