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
			console.log(options);
			this.page = options.page;
		},
		render : function() {
			console.log('render page');
			console.log(this.page);

			this.$el.html(_.template(this.template, {
				// name : this.model.get('name')
				name : this.page.name,
				url : this.page.url
			}));
			return this;
		},
		select : function() {
			this.$el.addClass('selected');
			return this;
		},
		deselect : function() {
			this.$el.removeClass('selected');
			return this;
		}

	});
});
