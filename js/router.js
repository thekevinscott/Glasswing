(function(){



	Backbone.sync = function(method, model, success, error){success();}
	var tabManager, worklist, guide;




	worklist = glasswing.config.worklist;


	var routes = {
		home : function(chapter, section) {
			console.log('home');

			guide.home();


			glasswing.router.initial_route = false;
		},
		guide : function(chapter, section) {
			guide.begin(arguments);
			glasswing.router.initial_route = false;
		},
		fourohfour : function() {

		}

	};

	var AppRouter = Backbone.Router.extend({
		routes: {
			// "guide" : routes.home,
			// "guide/" : routes.home,
			// "guide/:chapter" : routes.guide,
			// "guide/:chapter/:section" : routes.guide,
			// "worklist/:layout" : 'worklist',
			"": routes.home,
			"*actions": routes.guide
		}
	}); // Initiate the router
	glasswing.router = new AppRouter();
	glasswing.config.routes = routes;


	glasswing.router.initial_route = true;



	guide = new glasswing.views.guide({router: glasswing.router, chapters : glasswing.config.chapters});


	Backbone.history.start();


})();