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
		  "click .actions input[type=button]" : "saveProcedure"
		},
		initialize : function(attributes) {


			//this.procedure = attributes.procedure; // do I have to explicitly set this? I thought backbone takes care of that automagically.
			if (! this.model) { throw("You must specify a procedure"); }
			this.name = this.model.get('name');

			this.url = 'procedure/'+this.model.get('id');


		},
		setOptions : function(options) {

		},
		saveProcedure : function(event) {
			var button = $(event.currentTarget);

			switch(button.val()) {
				case 'Read' :
				break;
				case 'Co-Read' :
				break;
				case 'Approve' :
				break;
			}

			window.location.hash = 'worklist';
			// how do I access tab manager in this scenario?
		},
		render : function() {

			this.$el.html(_.template(this.template, {
				procedure_id : this.model.get('procedure_id'),
				patient_id : this.model.get('patient').get('patient-id'),
				patient_risks : this.model.get('patient').get('patient-risks'),
				dob : this.model.get('patient').get('dob'),
				gender : this.model.get('patient').get('gender'),
				name : this.model.get('name'),
				priority : this.model.get('priority'),
				procedure_class : this.model.get('procedure_class'),
				procedure_name : this.model.get('procedure_name'),
				report_status : this.model.get('report_status'),
				hospital_name : this.model.get('hospital_name'),
				referring_physician : this.model.get('referring_physician'),

			}));
			return this;
		}

	});
});
