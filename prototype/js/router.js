	(function(){



		Backbone.sync = function(method, model, success, error){success();}
		var tabManager, worklist, guide, notifications;




		worklist = glasswing.config.worklist;


		var routes = {
			worklist : function(layout) {



				tabManager.showPage(worklist);
				glasswing.router.initial_route = false;
			},
			exam : function(exam_id) {


				glasswing.notif('exam: ' + exam_id);
				tabManager.getPage(worklist); // get page SETS the page, creates a tab. that's confusing.

				(function(exam){
					// alert('this is no good, itll make an extra report if you go back to worklist and click again');
					// tabManager.showPage(new glasswing.views.report({model : exam}));
					// console.log(exam);
					// console.log(exam.view);
					tabManager.showPage(exam.view.getReport());

				})(worklist.exams.getExam(exam_id));
				glasswing.router.initial_route = false;


			},
			fourohfour : function() {
				alert('Page not found.');
			}

		};

		var AppRouter = Backbone.Router.extend({
			routes: {
				"exam/:exam_id" : routes.exam,
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
		worklist.notifications = new glasswing.views.notifications({tabManager : tabManager});

		Backbone.history.start();

		$('.loading').removeClass('loading');
		if (window['glasswing-guide-callback']) { window['glasswing-guide-callback'](); }
	})();