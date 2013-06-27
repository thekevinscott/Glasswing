define([
	'underscore',
	'backbone',
	'models/patient'
], function(_, Backbone, patient) {

	return Backbone.Collection.extend({
		model: patient,
		initialize : function() {

			_(this).bindAll('add');

		},
		add : function(model) {
			if (model['getID']) {

				if (! model.getID()) { model.setID(this.length); }
		    	console.log('you added patient: ' + model.getName());
			} else {
				console.log('who the fuck is this');
				console.log(model);
			}

		}

	});
});
