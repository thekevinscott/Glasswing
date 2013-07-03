define([
	'plugins',
	'underscore',
	'backbone',
	'views/guide/guide',
	'collections/tabs',
	'config',
	'models/patient',
	'models/procedure',
	'views/worklist',
	// other views would go here
], function(plugins, _, Backbone, guideView, tabs, config, patient, procedure, worklistView){

	var tabManager, worklist, guide;




	worklist = config.worklist;


	var AppRouter = Backbone.Router.extend({
		routes: {
			"procedure/:procedure_id" : 'procedure',
			"worklist" : 'worklist',
			"guide" : 'titlePage',
			"guide/" : 'titlePage',
			"guide/:chapter" : 'explore',
			"guide/:chapter/:section" : 'explore',
			// "worklist/:layout" : 'worklist',
			"*actions": "titlePage" // matches http://example.com/#anything-here
			}
	}); // Initiate the router
	var app_router = new AppRouter();
	app_router.url = function(url,options) {

		if (this.guide && this.guide.isActive()) {

			// if the guide is active, only allow URL requests that originate there.
			if (options && options.hasOwnProperty('caller') && options.caller == guide) {
				console.log('set url from guide: ' + url);
				this.navigate(url,options);
			} else {
				console.log('worklist attempted to set url while guide is active: ' + url);
				// console.log(options.caller);
			}

		} else {
			console.log('worklist attempted to set url and guide is inactive: ' + url);
			this.navigate(url,options);
		}

	}
	app_router.setGuide = function(obj) {
		this.guide = obj;
	}
	app_router.initial_route = true;
	guide = new guideView({router: app_router, chapters : config.chapters});


	app_router.on('route:titlePage', function() {
		// console.log('intro');
		// console.log(config);

		guide.titlePage();

		tabManager.showPage(worklist);
		app_router.initial_route = false;
	});
	app_router.on('route:explore', function(chapter, section) {
		// console.log('here');
		guide.begin(arguments);
		guide.setActive(true);

		tabManager.showPage(worklist);
		app_router.initial_route = false;
	});



	app_router.on('route:worklist', function(layout) {
		guide.setActive(false);
		guide.begin(arguments);


		tabManager.showPage(worklist);
		app_router.initial_route = false;
	});
	app_router.on('route:procedure', function(procedure_id) {
		guide.setActive(false);
		guide.begin(arguments);


		console.log('procedure: ' + procedure_id);
		tabManager.getPage(worklist); // get page SETS the page, creates a tab. that's confusing.

		(function(procedure){

			tabManager.showPage(procedure);

		})(worklist.getProcedure(procedure_id));
		app_router.initial_route = false;


	});


	// console.log('ready!');
	tabManager = new tabs({router : app_router, worklist : worklist});

	Backbone.history.start();



});
