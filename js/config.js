//'lib/text!templates/guide/chapter1.md',
(function($){

	var number_of_random_procedures, worklist, patientsCollection, proceduresCollection;
	number_of_random_procedures = 50;


	worklist = new glasswing.views.worklist();
	// generate a collection of random patients
	patientsCollection = new glasswing.collections.patients();



	for (var i=0;i<number_of_random_procedures;i++) {

		var procedureModel = worklist.procedures.getRandomProcedure(patientsCollection.generateRandomPatient());

		//var procedureView = new glasswing.views.procedure({model : procedureModel});

		worklist.procedures.add(procedureModel);
	}


	var parseChapters = function(data) {
		var chapters = {

		}

		_.each([data],function(chapter){
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
		});
		return chapters;
	}

	glasswing.config = {worklist : worklist, chapters : parseChapters($('#guide-chapter1')) };



})(jQuery);