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
			console.log("tab model");
			console.log(this.page);
			console.log(this.page.name);
			this.$el.html(_.template(this.template, {
				// name : this.model.get('name')
				name : this.page.name,
				url : this.page.url
			}));
			return this;
		}

	});
});
