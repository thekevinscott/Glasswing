define([
	'underscore',
	'backbone',
	'lib/text!templates/tab.html'
], function(_, Backbone, template) {

	return Backbone.View.extend({
		tagName : 'li',
		className : 'tab',
		template : template,
		initialize : function() {

			this.model.view = this;

		},
		render : function() {
			console.log(this.model);
			console.log(this.model.get('name'));
			this.$el.html(_.template(this.template, {
				name : this.model.get('name')
			}));
			return this;
		}

	});
});
