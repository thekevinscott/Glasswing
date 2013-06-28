define([
	'jquery',
	'underscore',
	'backbone',

	'views/worklist',


	'models/patient',


	'collections/patients',
	'collections/worklist',
	'collections/tabs',

	'views/patient',
	'models/procedure',

], function($, _, Backbone, worklistView, patient, patients, worklistCollection, tabs, patientView, procedure){


	// so actually. we should have a 'worklist' collection. this is our canonical worklist.
	// worklist has an associated view

	var initialize = function(){

		Backbone.sync = function(method, model, success, error){success();}


		var tabManager = new tabs();

		//var patientCollection = new patients();

		var worklist_view = new worklistView({collection : new worklistCollection()});

		tabManager.add(worklist_view);

		// procedure is the canonical worklist
		worklist_view.collection.add(new procedure({patient : new patient({first : "Bob", last: "Kraut"})}));
		worklist_view.collection.add(new procedure({
			patient : new patient({first : "Bob", last: "Kraut2"}),
			referring_physician : 'Thompson'
		}));


		// var patient = new patient({first : "Bob", last: "Kraut"});

		// patientCollection.add(new patient({first : "Bob", last: "Kraut"}));
		// patientCollection.add(new patient({first : "Steve", last: "Buscemi"}));



	} ;

	return {
		initialize: initialize
	};
});