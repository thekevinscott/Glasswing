define([
	'jquery',
	'underscore',
	'backbone',


	'models/patient',
	'models/procedure',
	'collections/patients'

], function($, _, Backbone, patient, procedure, patients){
	var initialize = function(){

		Backbone.sync = function(method, model, success, error){success();}

		var patientCollection = new patients();


		patientCollection.add(new patient({first : "Bob", last: "Kraut"}));
		patientCollection.add(new patient({first : "Steve", last: "Buscemi"}));
	} ;

	return {
		initialize: initialize
	};
});

/*

require([
	'jquery',
	'underscore',
	'backbone',
	// 'router',
	'models/patient',
	'models/procedure',
	'collections/patients'
], function($, _, Backbone, patient, procedure, patients){
	console.log("glasswing me");
	var initialize = function() {
		//Router.initialize();
		Backbone.sync = function(method, model, success, error){success();}

		// Set up some options for jQuery and plugins.
		$(document).ajaxError(function() {
		  alert("There was an error.");
		});


		var patient1 = new patient({first : "Bob", last: "Kraut"});

		var patient2 = new patient({first : "Ben", last: "Margines"});



		var patients = new patients([]);
		patients.bind('add', function(model){
		    console.log('you added a patient');
		    console.log(model.getName());
		});

		patients.add(patient1);
		patients.add(patient2);
	}
	console.log('me');
	return {
		initialize : initialize
	}
});

// window.glasswing = {
// 	views : {},
// 	models : {},
// 	collections : {},
// 	initialize : function() {
// 		console.log('init');
// 			Backbone.sync = function(method, model, success, error){success();}

// 		    // Set up some options for jQuery and plugins.
// 		    $(document).ajaxError(function() {
// 		      alert("There was an error.");
// 		    });


// 		    var patient1 = new glasswing.models.patient({first : "Bob", last: "Kraut"});

// 		    var patient2 = new glasswing.models.patient({first : "Ben", last: "Margines"});


// 		    glasswing.collections.patients = Backbone.Collection.extend({
// 		      model: glasswing.models.patient
// 		    });

// 		    var patients = new glasswing.collections.patients([]);
// 		    patients.bind('add', function(model){
// 		        console.log('you added a patient');
// 		        console.log(model.getName());
// 		    });

// 		    patients.add(patient1);
// 		    patients.add(patient2);
// 	}
// };

*/