define([
	'underscore',
	'backbone',
	'lib/text!templates/report/index.html',
], function(_, Backbone, template) {

	return Backbone.View.extend({
		tagName : 'div',
		className : 'report',
		// model : new worklist(),
		template : template,
		events : {
		  // "click tbody tr" : "openProcedure"
		},
		initialize : function(attributes) {


			//this.procedure = attributes.procedure; // do I have to explicitly set this? I thought backbone takes care of that automagically.
			if (! this.model) { throw("You must specify a procedure"); }
			this.name = this.model.get('name');

			this.url = 'procedure/'+this.model.get('id');


		},
		setOptions : function(options) {

		},

		render : function() {
			this.$el.html(_.template(this.template, {
				name : this.model.get('name')
			}));
			return this;
		}

	});
});
