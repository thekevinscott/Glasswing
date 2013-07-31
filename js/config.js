
(function($){



	var parseChapters = function(urls) {
		// data =
		if (! glasswing.config) { glasswing.config = {}; }
		glasswing.config.chapters = {
			chapters : {

			},
			chapters_by_order : []
		}

		for (var i=0;i<urls.length;i++) {
			var chapter = glasswing.template('pages/'+urls[i]+'.md');



			var key;

			// var pane_count;
			var pane_name;
			_.each(markdown.toHTMLTree(chapter),function(node){





				switch(node[0]) {
					case 'h1' :
						key = node[1].toURL();
						if ( ! glasswing.config.chapters.chapters.hasOwnProperty(key)) { glasswing.config.chapters.chapters[key] = {panes : {}, panes_by_order : [] }; }
						glasswing.config.chapters.chapters[key].title = node[1];
						glasswing.config.chapters.chapters_by_order.push(glasswing.config.chapters.chapters[key]);
					break;
					case 'h2' :
						// if (pane_count===undefined) { pane_count = 0;}
						// else { pane_count++; }
						pane_name = node[1].toURL();
						glasswing.config.chapters.chapters[key].panes[pane_name] = {title : node[1], paragraphs : [] };
						glasswing.config.chapters.chapters[key].panes_by_order.push(glasswing.config.chapters.chapters[key].panes[pane_name]);
					break;
					case 'p' :
						glasswing.config.chapters.chapters[key].panes[pane_name].paragraphs.push(node[1]);
					break;
				}
			});

			if (glasswing.config.guide_events.hasOwnProperty(key)) {
				glasswing.config.chapters.chapters[key].events = glasswing.config.guide_events[key];
			}

			// var events = glasswing.template('views/guide/'+urls[i]+'.js');
			// if (events) {
			// 	console.log(events);
			// }
			// // do we have an associated js?
			// var callback = function(data) {

			// };

			// (function(){
			// 	var url = 'js/views/guide/'+urls[i]+".js?bust="+(new Date).getTime();


			// 	$.ajax({
			// 		url: url,
			// 		error : function() {
			// 			// console.log('error: '+ url);
			// 		},
			// 		success : function() {
			// 			// console.log('success: '+ url);
			// 			window.loadFile({url: url, element: 'script', type: 'text/javascript'});
			// 		}
			// 	});
			// })();


		};


	}

	parseChapters([
		'tabs',
		'expanded-worklist',
		'caregivers',
		'following',
		'timeline',
		'content-panel',


	]);



})(jQuery);