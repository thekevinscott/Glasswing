define([
	'underscore',
	'backbone',
	'models/patient',
	'views/patient'
], function(_, Backbone, patient, patientView) {

	return Backbone.Collection.extend({
		model: patient,
		initialize : function() {

			_(this).bindAll('add');

		},
		add : function(model) {
			if (model['getID']) {

				if (! model.getID()) { model.setID(this.length); }
		    	console.log('you added patient: ' + model.getName());

		    	$('body').append((new patientView({model : model })).render().$el);
			} else {
				console.log('who the fuck is this');
				console.log(model);
			}

		}

	});
});
