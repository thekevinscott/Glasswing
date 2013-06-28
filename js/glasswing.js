define([
	'jquery',
	'underscore',
	'backbone',

	'router',

], function($, _, Backbone, Router){


	// so actually. we should have a 'worklist' collection. this is our canonical worklist.
	// worklist has an associated view

	var initialize = function(){

		Router.initialize();
		Backbone.sync = function(method, model, success, error){success();}




		//var patientCollection = new patients();


		// var patient = new patient({first : "Bob", last: "Kraut"});

		// patientCollection.add(new patient({first : "Bob", last: "Kraut"}));
		// patientCollection.add(new patient({first : "Steve", last: "Buscemi"}));



	} ;

	return {
		initialize: initialize
	};
});