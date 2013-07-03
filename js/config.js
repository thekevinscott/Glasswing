define([
	'markdown',
	'collections/patients',
	'collections/procedures',
	'models/worklist',
	'lib/text!templates/guide/chapter1.md',
	],
function(markdown, patients, procedures, worklistModel, tabs) {
	String.prototype.toURL = function() { return this.split(' ').join('-').toLowerCase();}

	var number_of_random_procedures, worklist, patientsCollection, proceduresCollection;
	number_of_random_procedures = 50;
	worklist = new worklistModel();

	// generate a collection of random patients
	patientsCollection = new patients();
	proceduresCollection = new procedures();


	for (var i=0;i<number_of_random_procedures;i++) {
		worklist.add(proceduresCollection.getRandomProcedure(patientsCollection.generateRandomPatient()));
	}


	var parseChapters = function() {
		var chapters = {

		}

		_.each([tabs],function(chapter){
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


  	return {worklist : worklist, chapters : parseChapters() };
});