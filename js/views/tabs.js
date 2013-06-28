define([
	'underscore',
	'backbone',
	'lib/text!templates/tab.html'
], function(_, Backbone, template) {

	return Backbone.View.extend({
		tagName : 'li',
		className : 'tab',
		template : template,
		initialize : function(options) {
			this.page = options.page;
		},
		render : function() {
			console.log('render page');
			this.$el.html(_.template(this.template, {
				// name : this.model.get('name')
				name : this.page.name,
				url : this.page.url
			}));
			return this;
		}

	});
});
