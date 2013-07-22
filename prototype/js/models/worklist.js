glasswing.models.worklist = glasswing.models.abstract.extend({

	defaults : {
		name : 'Worklist'
	},
	initialize : function(attributes) {
		this.view = attributes.view;
		this.bind("change", function(){
		  console.log('Collection has changed.');
		});
		this.on("change", function(){
			alert('heyo');
		  console.log('Collection has changed.');
		});
	},
	// add : function(exam) {

	// 	this.collection.add(exam);

	// 	/// hmmm, this code should actually be in the model definition, not in the collection definition
	// 	if (! exam.get('id')) {
	// 		exam.set('id',this.collection.length);
	// 	}
	// },
	getExam : function(exam_id) {
		return this.collection.get(exam_id);
	},
	getExams : function() {
		return this.collection.models;
	},
	getExamsByModality : function() {

		var exams = {};
		$(this.getExams()).each(function(){
			var exam_name = this.get('exam_name');
			if (! exams[exam_name]) { exams[exam_name] = []; }
			exams[exam_name].push(this);
		});
		return exams;
	}
});
