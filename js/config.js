
(function($){



	var parseChapters = function(urls) {
		// data =

		var chapters = {
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
						if ( ! chapters.chapters.hasOwnProperty(key)) { chapters.chapters[key] = {panes : {}, panes_by_order : [] }; }
						chapters.chapters[key].title = node[1];
						chapters.chapters_by_order.push(chapters.chapters[key]);
					break;
					case 'h2' :
						// if (pane_count===undefined) { pane_count = 0;}
						// else { pane_count++; }
						pane_name = node[1].toURL();
						chapters.chapters[key].panes[pane_name] = {title : node[1], paragraphs : [] };
						chapters.chapters[key].panes_by_order.push(chapters.chapters[key].panes[pane_name]);
					break;
					case 'p' :
						chapters.chapters[key].panes[pane_name].paragraphs.push(node[1]);
					break;
				}
			});
			// do we have an associated js?
			var events = $.ajax({
				url: 'js/views/guide/'+urls[i]+".js?bust="+(new Date).getTime(),
				async: false,
			});
			if (events.status == 200) {
				chapters.chapters[key].events = events.responseText;
			}
			// console.log(events);
		};



		return chapters;
	}

	glasswing.config = {chapters : parseChapters([
		'tabs',
		'notifications',
		'case-cards',
		'following',
		'timeline',
		'side-by-side',
		'caregivers'
	]) };



})(jQuery);