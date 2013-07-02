define([

	'underscore',
	'backbone',
	'collections/tabs',
	'config',
	'models/patient',
	'models/procedure',
	'views/worklist',
	// other views would go here
], function(_, Backbone, tabs, config, patient, procedure, worklistView){
	var tabManager, worklist;

	worklist = config.worklist;


	var AppRouter = Backbone.Router.extend({
		routes: {
			"procedure/:procedure_id" : 'procedure',
			"worklist" : 'worklist',
			// "worklist/:layout" : 'worklist',
			"*actions": "worklist" // matches http://example.com/#anything-here
			}
	}); // Initiate the router
	var app_router = new AppRouter();
	app_router.on('route:defaultRoute', function(actions) {
		tabManager.showPage(worklist);
	});
	app_router.on('route:worklist', function(layout) {
		tabManager.showPage(worklist);
	});
	app_router.on('route:procedure', function(procedure_id) {

		console.log('procedure: ' + procedure_id);
		tabManager.getPage(worklist); // get page SETS the page, creates a tab. that's confusing.

		(function(procedure){

			tabManager.showPage(procedure);

		})(worklist.getProcedure(procedure_id));



	});


	tabManager = new tabs({router : app_router, worklist : worklist});

	Backbone.history.start();



});