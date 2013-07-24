glasswing.models.doctor = glasswing.models.abstract.extend({
  	initialize : function(data) {
  		// console.log('i am a doctor');

  		this.worklist = data.worklist;
  		this.readExam();
  		this.readTime = 10;
  		this.browseTime = 15;
  		this.minimumBrowseTime = 2;
	},
	getName : function() {
		return 'Dr. ' +this.get('first')+' '+this.get('last')
	},
	readExam : function() {

		var self = this;
		var time = Math.random()*self.readTime; // some random number, up to 20 seconds
		setTimeout(function(){
			var index = Math.floor(Math.random()*self.worklist.exams.length) ;
			var exam = self.worklist.exams.get(index);
			console.log(self.worklist.exams);
			console.log(index);
			console.log(exam);
			if (exam && exam.get('locked')==false && exam.get('reading')==false) {
				exam.set('locked',self.getName());
				self.exam = exam;
				self.completeExam();
			} else {
				self.readExam();
			}

			//this.worklist
		},1000*time);
	},
	completeExam : function() {
		var self = this;
		var time = Math.random()*self.browseTime; // some random number, up to 10 seconds
		time += self.minimumBrowseTime*1000;
		setTimeout(function(){
			if (self.exam) {
				self.exam.set('locked',false);
			}
			self.readExam();
		},1000*time);
	}
});