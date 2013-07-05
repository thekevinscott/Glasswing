(function(){



	Backbone.sync = function(method, model, success, error){success();}
	var tabManager, worklist, guide;




	worklist = glasswing.config.worklist;


	var routes = {
		worklist : function(layout) {



			tabManager.showPage(worklist);
			glasswing.router.initial_route = false;
		},
		procedure : function(procedure_id) {


			glasswing.notif('procedure: ' + procedure_id);
			tabManager.getPage(worklist); // get page SETS the page, creates a tab. that's confusing.

			(function(procedure){
				// alert('this is no good, itll make an extra report if you go back to worklist and click again');
				// tabManager.showPage(new glasswing.views.report({model : procedure}));
				// console.log(procedure);
				// console.log(procedure.view);
				tabManager.showPage(procedure.view.getReport());

			})(worklist.procedures.getProcedure(procedure_id));
			glasswing.router.initial_route = false;


		},
		fourohfour : function() {

		}

	};

	var AppRouter = Backbone.Router.extend({
		routes: {
			"procedure/:procedure_id" : routes.procedure,
			"worklist" : routes.worklist,
			"": routes.worklist,
			"*actions": routes.fourohfour
		}
	}); // Initiate the router
	glasswing.router = new AppRouter();
	glasswing.config.routes = routes;

	glasswing.router.url = function(url,options) {
		this.navigate(url,options);
	}

	glasswing.router.initial_route = true;


	tabManager = new glasswing.collections.tabs({router : glasswing.router, worklist : worklist});

	Backbone.history.start();


})();