(function(){



	Backbone.sync = function(method, model, success, error){success();}
	var tabManager, worklist, guide;




	worklist = glasswing.config.worklist;


	var routes = {
		home : function(chapter, section) {
			console.log('home');

			guide.home();

			tabManager.showPage(worklist);
			glasswing.router.initial_route = false;
		},
		worklist : function(layout) {
			guide.setActive(false);
			guide.begin(arguments);


			tabManager.showPage(worklist);
			glasswing.router.initial_route = false;
		},
		procedure : function(procedure_id) {

			guide.setActive(false);
			guide.begin(arguments);


			glasswing.notif('procedure: ' + procedure_id);
			tabManager.getPage(worklist); // get page SETS the page, creates a tab. that's confusing.

			(function(procedure){

				tabManager.showPage(procedure);

			})(worklist.getProcedure(procedure_id));
			glasswing.router.initial_route = false;


		},
		guide : function(chapter, section) {

			guide.begin(arguments);
			guide.setActive(true);

			tabManager.showPage(worklist);
			glasswing.router.initial_route = false;
		},
		fourohfour : function() {

		}

	};

	var AppRouter = Backbone.Router.extend({
		routes: {
			"procedure/:procedure_id" : routes.procedure,
			"worklist" : routes.worklist,
			"guide" : routes.home,
			"guide/" : routes.home,
			"guide/:chapter" : routes.guide,
			"guide/:chapter/:section" : routes.guide,
			// "worklist/:layout" : 'worklist',
			"": routes.home,
			"*actions": routes.fourohfour
		}
	}); // Initiate the router
	glasswing.router = new AppRouter();
	glasswing.config.routes = routes;

	glasswing.router.url = function(url,options) {

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
	glasswing.router.setGuide = function(obj) {
		this.guide = obj;
	};

	glasswing.router.initial_route = true;



	guide = new glasswing.views.guide.guide({router: glasswing.router, chapters : glasswing.config.chapters});





	// glasswing.err('switch tabs collection to be contained by view');
	tabManager = new glasswing.collections.tabs({router : glasswing.router, worklist : worklist});

	Backbone.history.start();


})();