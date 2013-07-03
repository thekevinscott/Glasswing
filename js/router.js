
glasswing.router = function() {

	Backbone.sync = function(method, model, success, error){success();}
	var tabManager, worklist, guide;




	worklist = glasswing.config.worklist;


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
				glasswing.notif('set url from guide: ' + url);
				this.navigate(url,options);
			} else {
				glasswing.notif('worklist attempted to set url while guide is active: ' + url);
			}

		} else {
			glasswing.notif('worklist attempted to set url and guide is inactive: ' + url);
			this.navigate(url,options);
		}

	}
	app_router.setGuide = function(obj) {
		this.guide = obj;
	}
	app_router.initial_route = true;
	guide = new glasswing.views.guide.guide({router: app_router, chapters : glasswing.config.chapters});


	app_router.on('route:titlePage', function() {

		guide.titlePage();

		tabManager.showPage(worklist);
		app_router.initial_route = false;
	});
	app_router.on('route:explore', function(chapter, section) {

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


		glasswing.notif('procedure: ' + procedure_id);
		tabManager.getPage(worklist); // get page SETS the page, creates a tab. that's confusing.

		(function(procedure){

			tabManager.showPage(procedure);

		})(worklist.getProcedure(procedure_id));
		app_router.initial_route = false;


	});



	glasswing.err('switch tabs collection to be contained by view');
	tabManager = new glasswing.collections.tabs({router : app_router, worklist : worklist});

	Backbone.history.start();



}();

//});
