
(function($){



	var parseChapters = function(data) {
		var chapters = {

		}

		for (var i=0;i<data.length;i++) {
			var chapter = data[i];



			var key;

			// var pane_count;
			var pane_name;
			_.each(markdown.toHTMLTree(chapter),function(node){





				switch(node[0]) {
					case 'h1' :
						key = node[1].toURL();
						if ( ! chapters.hasOwnProperty(key)) { chapters[key] = {panes : {}, panes_by_order : [] }; }
						chapters[key].title = node[1];
					break;
					case 'h2' :
						// if (pane_count===undefined) { pane_count = 0;}
						// else { pane_count++; }
						pane_name = node[1].toURL();
						chapters[key].panes[pane_name] = {title : node[1], paragraphs : [] };
						chapters[key].panes_by_order.push(chapters[key].panes[pane_name]);
					break;
					case 'p' :
						chapters[key].panes[pane_name].paragraphs.push(node[1]);
					break;
				}
			});
		};
		return chapters;
	}

	glasswing.config = {chapters : parseChapters([
		glasswing.template('guide/tabs.md'),
		glasswing.template('guide/notifications.md'),
		glasswing.template('guide/case-cards.md'),
		glasswing.template('guide/following.md'),
		glasswing.template('guide/timeline.md'),
		glasswing.template('guide/side-by-side.md'),
		glasswing.template('guide/caregivers.md'),
	]) };



})(jQuery);