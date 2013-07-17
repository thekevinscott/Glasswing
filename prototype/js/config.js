
(function($){

	var worklist, patientsCollection;



	worklist = new glasswing.views.worklist();
	// generate a collection of random patients
	patientsCollection = new glasswing.collections.patients();

	// add a stat
	var procedureModel;

	var body_part, type;

	var createProcedure = function(attb) {
		if (attb.body_part) { body_part = attb.body_part; }
		if (attb.type) { type = attb.type; }
		procedureModel = worklist.procedures.getRandomProcedure(patientsCollection.generateRandomPatient());
		if (attb.priority) { procedureModel.set('priority',attb.priority); }
		procedureModel.set('procedure_type',type);
		procedureModel.set('body_part',body_part);
		procedureModel.set('clinical_indication',attb.indication);
		procedureModel.set('procedure_information',attb.procedure);
		procedureModel.set('findings',attb.findings);
		procedureModel.set('impression',attb.impression);
		if (attb.priors) { procedureModel.priors = attb.priors };
		procedureModel.worklist = worklist;
		worklist.procedures.add(procedureModel);
	}
	createProcedure({
		priority : 3,
		type : 'CT',
		body_part : 'Chest',
		indication : 'Right lower lobe lung mass seen on abdominal/pelvic CT scan.',
		procedure: 'Contrast enhanced and unenhanced CT scan of the chest was performed. 92 cc Isovue was administered IV.'
	});
	createProcedure({
		body_part : 'Abdomen',
		indication : 'Followup diverticulitis. Questionable abscess and enterovesical fistula.',
		procedure: 'Contrast enhanced CT scan abdomen and pelvis was performed after administration of 100 cc Isovue IV. Coronal and sagittal reconstructions were created and reviewed.'
	});
	createProcedure({
		indication : 'Left lower quadrant abdominal pain. Rule out diverticulitis.',
		procedure: 'Contrast enhanced CT scan abdomen and pelvis was performed using 97 cc Isovue 370 IV. Coronal reconstructions were created and reviewed.'
	});
	createProcedure({
		indication : 'Liver mass.',
		procedure: 'Pre-and post gadolinium MRI exam was performed, using 15 cc Omniscan IV.'
	});

	// createProcedure({
	// 	type : 'NUCLEAR',
	// 	body_part: 'BACK',
	// 	indication : 'Low back pain; remote history of cancer.',
	// 	procedure: 'After intravenous administration of x mCi of Tc-99m MDP, delayed total body images were obtained. Selected spot images as well as tomographic images (SPECT) images of the lumbosacral spine were also obtained.',
	// 	findings : 'Focal areas of moderately increased tracer activity are present in the lateral aspects of the L4 vertebra. On tomographic imaging, these areas of abnormal tracer activity localize to the facet joints. Mildly increased focal tracer activity is also present in a symmetric pattern in the shoulders, sternoclavicular joints, hips, knees (right greater than left), and ankles. A focal area of mildly increased tracer activity is noted in the anteromedial aspect of  the left 2nd rib. Moderately increased focal tracer activity is present in the right maxilla. There is no abnormal tracer activity in the soft tissues or urinary tract.',
	// 	impression : '1. No scan evidence of osteoblastic metastatic disease. 2. Extensive degenerative changes are present in multiple peripheral joints and the lumbar spine. 3. Scan findings in the right maxilla are most consistent with periodontal disease. 4. The focus of mild tracer activity in the anteromedial aspect of the left 2nd rib is likely related to a healing rib fracture. 5. No previous bone scans were available for comparison. '
	// });


	// for (var i=0;i<3;i++) {

	// 	var procedureModel = worklist.procedures.getRandomProcedure(patientsCollection.generateRandomPatient());

	// 	procedureModel.worklist = worklist;

	// 	//var procedureView = new glasswing.views.procedure({model : procedureModel});

	// 	worklist.procedures.add(procedureModel);

	// }

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