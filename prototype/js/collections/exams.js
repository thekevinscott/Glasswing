glasswing.collections.exams = Backbone.Collection.extend({
	tagName : 'tr',
	className : 'exam',

	initialize : function(attributes) {
		// this.view = attributes.view;
		_(this).bindAll('add');
	},

	ingredients : {
		exam_type : ['CT'],
		body_part : ['ABD', 'L LEG', 'R LEG', 'HEAD', 'CHEST', 'ANKLE', 'WRIST'],
		clinical_indications : ['Right lower lobe lung mass seen on abdominal/pelvic CT scan.'],
		exam_informations : ['Contrast enhanced and unenhanced CT scan of the chest was performed. 92 cc Isovue was administered IV.'],

		hospital : ['Mercy','Northwestern','Good Heart','Great Lake','Advocate','Shepherd','Good Shepherd','Murphy'],
		role : ['Resident','Technologist']
	},
	add : function(examModel) {

		Backbone.Collection.prototype.add.call(this, examModel);

		if (! examModel.get('id')) { examModel.set('id',this.models.length); }

		examModel.view.render();

		if (this.view.$target) {
			// optionally, if our parent table is available, render to it
			this.view.$target.append(examModel.view.render().$el);
		}

	},
	getExam : function(exam_id) {
		return this.get(exam_id);
	},

	getExams : function(options) {
		// console.log('get exam!');
		var self = this;
		if (! options) {
			return this.models;
		} else {
			var models = [];
			_.each(this.models,function(model) {

				// does it fit?
				var valid = true;
				_.each(options.search,function(arg, key) {
					var model_val = model.get(key);
					console.log(model_val);
					console.log(arg);
					if (valid == true && model_val && ! self.contains(model_val,arg)) {
						valid = false;
					}
				});
				if (valid) { models.push(model); }
			});

			if (options.sort) {
				console.log('sort it');
			}


			return models;
		}

	},
	contains : function(haystack,needle) {
		haystack = "" + haystack;
		needle = "" + needle;
		return (haystack.toLowerCase().indexOf(needle.toLowerCase())!==-1) ? true : false;


	},
	getExamsByModality : function() {

		var exams = {};
		$(this.getexams()).each(function(){
			var exam_name = this.get('exam_name');
			if (! exams[exam_name]) { exams[exam_name] = []; }
			exams[exam_name].push(this);
		});
		return exams;
	},
	getRandomExam : function(patient, priors, id) {
		var p = new glasswing.collections.patients();
		var caregivers = new glasswing.collections.caregivers();
		// var length = Math.round(Math.random()*0)+2;

		var caregivers = new glasswing.collections.caregivers();
		caregivers.generateRandomArray(1);

		return new glasswing.models.exam({
			id : id,
			patient : patient,
			scanned_documents : Math.round(Math.random()*10),
			referring_physician : 'Thompson',
			date : glasswing.randomDate(new Date()),
			end_time : new Date((new Date()).getTime() - Math.round(Math.random()*1000*360)),
			exam_name : this.getRandomIngredient('exam_type') + ' ' + this.getRandomIngredient('body_part'),
			priority : Math.round(Math.random()*2),
			exam_class : '-',
			report_status : 'Unread',
			exam_status : 'Comp.',
			referring_physician : p.getRandomIngredient('first')+ ' ' + p.getRandomIngredient('last'),
			hospital_name : this.getRandomIngredient('hospital'),
			caregivers : caregivers,
			priors : priors
		});
	},
	getRandomIngredient : function(key) {
		return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
	},
	search : function(args) {
		return this.getExams(args);
		var valid_models = [];
		_.each(this.models,function(model) {

			// does it fit?
			var valid = true;
			_.each(args,function(arg, key) {
				// console.log(key);
				var model_val = model.get(key);
				// console.log(model_val);
				if (valid == true && model_val && ! model_val.contains(arg)) {
					valid = false;
				}
			});
			if (valid) { valid_models.push(model); }
		});
		return valid_models;
	}

});








