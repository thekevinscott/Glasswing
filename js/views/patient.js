define([
	'underscore',
	'backbone',
	'models/patient',
	'lib/text!templates/patient.html'
], function(_, Backbone, patient, template) {

	return Backbone.View.extend({
		tagName : 'div',

		template : template,
		initialize : function() {

			this.model.view = this;
			this.$el.html(_.template(this.template, {
				name : "Name: " + this.model.getName(),
				supplies : ['1','2','3']
			}));
		},
		render : function() {
			return this;
		}

	});
});
