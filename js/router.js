define([

	'underscore',
	'backbone',
	'collections/tabs',
	'collections/patients',
	'collections/procedures',
	'models/worklist',
	'models/patient',
	'models/procedure',
	'views/worklist',
	// other views would go here
], function(_, Backbone, tabs, patients, procedures, worklist, patient, procedure, worklistView){
	var tabManager, worklistModel;


	var AppRouter = Backbone.Router.extend({
		routes: {
			"procedure/:procedure_id" : 'procedure',
			"worklist" : 'worklist',
			"worklist/:layout" : 'worklist',
			"*actions": "defaultRoute" // matches http://example.com/#anything-here
			}
	}); // Initiate the router
	tabManager = new tabs();

	worklistModel = new worklist();
	//var worklist_view = new worklistView();


	// generate a collection of random patients
	var patientsCollection = new patients();
	var proceduresCollection = new procedures();

	var number_of_random_procedures = 50;
	for (var i=0;i<number_of_random_procedures;i++) {
		worklistModel.add(proceduresCollection.getRandomProcedure(patientsCollection.generateRandomPatient()));

	}
	//worklistModel.addRandomProcedure();
	// should set ID automatically


	tabManager.showPage(worklistModel);
	// we will always have a worklist
	// tabManager.getPage(worklistModel, function(worklist_view){
	// 	tabManager.add(worklist_view).show(worklist_view);
	// });

	// tabManager.add(worklist_view);

	//var app_router = new AppRouter;
	var initialize = function() {
		var app_router = new AppRouter();
		app_router.on('route:defaultRoute', function(actions) {
			// console.log('defaults: ' + actions);
			// console.log(actions);
		});
		app_router.on('route:worklist', function(layout) {

			// tabManager.showPage(worklistModel,{layout : layout});
			tabManager.showPage(worklistModel);





			// 	// procedure is the canonical worklist

			// });
		});
		app_router.on('route:procedure', function(procedure_id) {

			console.log('procedure: ' + procedure_id);

			(function(procedure){

				tabManager.showPage(procedure);

			})(worklistModel.getProcedure(procedure_id));



		});
		Backbone.history.start();

	};
	return {
		initialize : initialize
	}


	// Start Backbone history a necessary step for bookmarkable URL's
	Backbone.history.start();

});