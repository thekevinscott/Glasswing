
(function($){

	var worklist, patientsCollection;



	worklist = new glasswing.views.worklist();
	// generate a collection of random patients
	patientsCollection = new glasswing.collections.patients();

	// add a stat
	var procedureModel;

	var body_part, type;

	var priors = [
		{
			type : 'MRI',
			body_part: "Brain",
			date : new Date('2-2-2012'),
			indication: 'Provided Clinical History: Pt states he has sharp, aching, tingling, shooting pain in head. He was in a car accident in Nov. 2009.',
			procedure: 'Fat-sensitive and fluid-sensitive MR sequences of the brain were performed in orthogonal planes. No prior studies are available for comparison.',
			findings: "There is mild diffuse cerebral atrophy present, consistent with this patient's age. There is a well-circumscribed fluid intensity lesion in the anterior middle cranial fossa, measuring 2 cm x 1 cm and consistent with a benign arachnoid cyst. There is moderate diffuse volume loss in the anterior right frontal lobe cortex, suggesting mild encephalomalacia from remote insult, most likely contusion. There is amild associates subcortical gliosis in this region. There is otherwise mild patchy increased signal intensity within the subcortical white matter, consistent with chronic ischemic changes. The ventricular system is normal in size and dirstibution. There is no evidence of intracranial hemmorrhage. There is no abnormal diffusion weighted signal intensity to suggest an acute ischemic event. There are no regions of abnormal enhancement",
			impression: 'The pitutuary gland and sella are normal. The brainstem is normal. The cranial nerves are normal. The cerebellum is normal. Normal intracranial flow voids are present'
		},
		{
			type : 'CT',
			relevant : true,
			body_part: "RT Shoulder",
			date : new Date('12-7-2011'),
			indication: 'Foreign body right shoulder',
			procedure: 'Shoulder complete RT min of two views',
			findings: 'Two AP views of the right shoulder were obtained. There is a subcutaneous 5.3mm x 1mm metallic foreign body superior to the humeral head and lateral to the AC joint. Whether this is anterior or posterior is uncertain since a transscapular Y view was not obtained. The AC join and glenohumeral joint otherwise appear well maintained.',
			impression: '5mm x 1mm subcutaneous metallic foreign body lateral to the acromion and above the humeral head as described.'
		},
		{
			type : 'CR',
			body_part: "Abdomen",
			date : new Date('10-1-2013'),
			indication: 'Patient complains of abdominal pain which increases on palpation. No palpable mass.',
			procedure: 'Pelvic US',
			findings: 'Transverse and longitudinal sector scans obtained reveal mild distention of the urinary bladder. There is an enlargd deformed uterus measuring 17 x 20 x 11 cm in size with an abnormal heterogenous ultrasound pattern of the myometruim and multiple poorly defined hypoechoic lesions. Adnexa is not enlarged. Ovarier could not be visualized. No evidence of the gree fluid in the cul-de-sac or in the pelvic cavity.',
			impression: 'Severe enlarged uterus with deformities and abnormal muometruim pattern consistent with extensive leiomyomatosis most likely. The abnormal ultrasound pattern is most likely all related to the leiomyomas and fibromas. Endometrial contents could not be evaluated accurately. CT images or MRI images could render more accuurate information in this regard'
		},
		{
			type : 'CT',
			body_part: "Abdomen",
			date : new Date('2-6-2010'),
			indication: 'Status post repair of abdominal aortic aneurysm with interval decrease in size of residual aneurysm sac and Type II endoleak via the inferio mesenteric artery.',
			procedure: 'Non-gated helical CT images were acquired through the chest prior to the administration of intravenous contrast and reconstructed at 5 mm slice thickness in the axial plane. Following the administration of 75 cc Ultravist 370 intravenous contrast, ECG gated helical CT images were acquired through the chest. Images were reconstructed at 3 mm slice thickness in the axial plane at 75% of the R-R interval. Non-gated delayed images were obtained throught htabdomen and pelvis and reconstructed at 3mm slice thickness.',
			findings: 'Status post aortic stent graft repair. There has been interval decrease in size of the residual aneurysm sac now measuring 4.4 x 4.3 cm. Type II endoleak is presend from the IMA. Measurements are as follows: Distal decending thoracic aorta: 3.2cm. Proximal abdominal aorta: 3.1cm. Right renal artery: calcifications at the ostium without significant stenosis. Left renal artery: widely patent. Celiac trunk: widely patent. Proximal segment of the SMA: Widely patent. IMA Origin: Widely patent. Atherosclerotic calcifications are present in the comon iliac, external iliac, itnernal iliac, and common femoral arteries. Milt stenosis is seen in the left femoral artery. There is no thrombus or stenosis seen in the SVC, innominate or subclavian veins. The protal vein, eplinic vein and SMV are patent. The left-sided IVC, bilateral renal veins and other hepatic veins appear to  be paten.',
			impression: ''
		},
		{
			type : 'CT',
			body_part: "Abdomen and Pelvis",
			date : new Date('12-7-2012'),
			indication: 'Left flank pain x 8 months, but worse today; nausea, vomiting, hematochezia, possible hematuria, and constipation; HX. renal stones, HX. left ureteroscopy, and laster lithotriopsy. Propr ct study done on 10/01/08 - images being sent for comparison.',
			procedure: 'Axial images were obtained without intravenous or oral contrast',
			findings: 'There is no dilation of the intrerenal collecting systems or ureters bilaterally. Several stones are seen in the left kidney measuring up to 4 mm in size which are unchanged. There re also several punctate hyperdensities in the right kidney which could represent tinuy stones or possibly concentrated urine in the renal papilla. No masses are seen in the liver, splee, pancreas, adrenals, or kidneys. However, it should be noted that lesions in the solid abdominal organs can be missed without intravenous contrast. No free peritoneal fluid is seen in the abdomen or pelvis. No pelvic mass is seen. No significant bowel dilation is identified.',
			impression: ''
		}
	];

	var createProcedure = function(attb) {
		if (attb.body_part) { body_part = attb.body_part; }
		if (attb.type) { type = attb.type; }
		procedureModel = worklist.procedures.getRandomProcedure(patientsCollection.generateRandomPatient(), priors);
		if (attb.priority) { procedureModel.set('priority',attb.priority); }
		procedureModel.set('procedure_type',type);
		procedureModel.set('body_part',body_part);
		procedureModel.set('clinical_indication',attb.indication);
		procedureModel.set('procedure_information',attb.procedure);
		procedureModel.set('findings',attb.findings);
		procedureModel.set('impression',attb.impression);

		// if (attb.priors) { procedureModel.priors = attb.priors };
		procedureModel.worklist = worklist;
		worklist.procedures.add(procedureModel);
	}

	//these are the current ones in the worklist
	createProcedure({
		priority : 2,
		type : 'CT',
		body_part : 'Chest',
		indication : 'Right lower lobe lung mass seen on abdominal/pelvic CT scan.',
		procedure: 'CT scan of the chest.'
	});
	createProcedure({
		priority : 2,
		type : 'CT',
		body_part : 'Abdomen',
		indication : 'Followup diverticulitis. Questionable abscess and enterovesical fistula.',
		procedure: 'Oral contrast enhanced CT scan abdomen and pelvis was performed. Coronal and sagittal reconstructions were created.'
	});
	createProcedure({
		priority : 4,
		type: 'CT',
		body_part : 'head',
		indication : 'Low-speed MVA, patient found prone with some confusion. A&O x3. Rule out cervical fractures',
		procedure: 'Volumetric scanning of head and next performed in 64 slices.'
	});
	createProcedure({
		priority : 4,
		type : 'CR',
		body_part : "RT Wrist",
		indication : 'Pt fell off bicycle and landed on RT arm and shoulder. Complains of wrist pain.',
		procedure: 'AP and lateral CR images taken.'
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