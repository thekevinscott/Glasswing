define([
	'jquery',
	'underscore',
	'backbone',

	'views/worklist',


	'models/patient',
	'models/procedure',

	'collections/patients',
	'collections/tabs',

	'views/patient',


], function($, _, Backbone, worklistView, patient, procedure, patients, tabs, patientView){

	var initialize = function(){

		Backbone.sync = function(method, model, success, error){success();}


		var tabManager = new tabs();


		var worklist_view = new worklistView();



		tabManager.add(worklist_view);


		var patientCollection = new patients();
		// var patient = new patient({first : "Bob", last: "Kraut"});

		// patientCollection.add(new patient({first : "Bob", last: "Kraut"}));
		// patientCollection.add(new patient({first : "Steve", last: "Buscemi"}));



	} ;

	return {
		initialize: initialize
	};
});