define([
	'underscore',
	'backbone',
	'models/worklist',
	'lib/text!templates/worklist.html'
], function(_, Backbone, worklist, template) {

	return Backbone.View.extend({
		tagName : 'div',
		className : 'worklist',
		model : new worklist(),
		template : template,
		initialize : function() {

			this.model.view = this;


		},
		render : function() {
			this.$el.html(_.template(this.template, {
				name : "Name: "
			}));
			return this;
		}

	});
});
