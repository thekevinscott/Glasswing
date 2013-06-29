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
			"worklist/:layout" : 'worklist',
			"*actions": "defaultRoute" // matches http://example.com/#anything-here
			}
	}); // Initiate the router
	var app_router = new AppRouter();
	app_router.on('route:defaultRoute', function(actions) {
		// console.log('defaults: ' + actions);
		// console.log(actions);
		tabManager.showPage(worklist);
	});
	app_router.on('route:worklist', function(layout) {

		// tabManager.showPage(worklistModel,{layout : layout});
		tabManager.showPage(worklist);





		// 	// procedure is the canonical worklist

		// });
	});
	app_router.on('route:procedure', function(procedure_id) {

		console.log('procedure: ' + procedure_id);
		tabManager.getPage(worklist, function(page){
		    //self.router.navigate(page.view.url,options);
		    page.view.setOptions(options);
		});

		(function(procedure){

			tabManager.showPage(procedure);

		})(worklist.getProcedure(procedure_id));



	});








	tabManager = new tabs({router : app_router, worklist : worklist});
	//var worklist_view = new worklistView();


	//worklistModel.addRandomProcedure();
	// should set ID automatically



	// we will always have a worklist
	// tabManager.getPage(worklistModel, function(worklist_view){
	// 	tabManager.add(worklist_view).show(worklist_view);
	// });

	// tabManager.add(worklist_view);

	//var app_router = new AppRouter;

	Backbone.history.start();



});