(function(){



	Backbone.sync = function(method, model, success, error){success();}
	var tabManager, worklist, guide;




	worklist = glasswing.config.worklist;


	var AppRouter = Backbone.Router.extend({
		routes: {
			":chapter" : 'guide',
			":chapter/:section" : 'guide',
			"": "home",
			"home": "home",
			"home/": "home",
			"guide" : 'guide',
			"guide/" : 'guide',

			// "*actions": 'guide'
		}
	}); // Initiate the router
	glasswing.router = new AppRouter();


	glasswing.router.initial_route = true;
	glasswing.router.on('route:guide', function(chapter, section) {
		alert('guide');
		// console.log(arguments);
		guide.begin(arguments);
		glasswing.router.initial_route = false;

	});
	glasswing.router.on('route:home', function() {
		alert('home');
		guide.home();
		glasswing.router.initial_route = false;

	});


	guide = new glasswing.views.guide({router: glasswing.router, chapters : glasswing.config.chapters});
	glasswing.guide = guide;

	Backbone.history.start();


})();