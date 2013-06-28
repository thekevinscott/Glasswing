define([

	'underscore',
	'backbone',
	'collections/tabs',
	'collections/patients',
	'models/worklist',
	'models/patient',
	'models/procedure',
	'views/worklist',
	// other views would go here
], function(_, Backbone, tabs, patients, worklist, patient, procedure, worklistView){
	var tabManager, worklistModel;


	var AppRouter = Backbone.Router.extend({
		routes: {
			"procedure/:procedure_id" : 'procedure',
			"worklist" : 'worklist',
			"*actions": "defaultRoute" // matches http://example.com/#anything-here
			}
	}); // Initiate the router
	tabManager = new tabs();

	worklistModel = new worklist();
	//var worklist_view = new worklistView();


	// should set ID automatically
	worklistModel.add(new procedure({
		id : 1,
		patient : new patient({first : "Bob", last: "Kraut"})}));
	worklistModel.add(new procedure({

		patient : new patient({first : "Bob", last: "Kraut2"}),
		referring_physician : 'Thompson'
	}));
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
			console.log(actions);
		});
		app_router.on('route:worklist', function(actions) {

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