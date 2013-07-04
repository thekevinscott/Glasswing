//'lib/text!templates/report/index.html',
(function($){
	glasswing.views.report = glasswing.views.abstract.extend({
		tagName : 'div',
		className : 'report',
		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('report.html'),
		events : {
		  "click .actions input[type=button]" : "saveProcedure"
		},
		initialize : function(attributes) {

        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);


			this.name = this.model.get('name');

			this.url = 'procedure/'+this.model.get('id');

			var self = this;
			setTimeout(function(){

				self.model.set('images',10);
				// console.log(self.model.get('images'));
			},200);

			this.model.on('change', function(){
				console.log('this sucks, should go in the model code');
				alert('change the view');
			}); // attempt to bind to model change event


		},
		setOptions : function(options) {

		},
		saveProcedure : function(event) {
			var button = $(event.currentTarget);

			switch(button.val()) {
				case 'Read' :
				break;
				case 'Co-Read' :
				break;
				case 'Approve' :
				break;
			}

			this.tabManager.closeTab(this);



			// how do I access tab manager in this scenario?
		},
		render : function() {

			this.$el.html(_.template(this.template, {
				id : this.model.get('id'),
				patient_id : this.model.get('patient').get('patient-id'),
				patient_risks : this.model.get('patient').get('patient-risks'),
				dob : this.model.get('patient').get('dob'),
				gender : this.model.get('patient').get('gender'),
				name : this.model.get('name'),
				priority : this.model.get('priority'),
				procedure_class : this.model.get('procedure_class'),
				procedure_name : this.model.get('procedure_name'),
				report_status : this.model.get('report_status'),
				hospital_name : this.model.get('hospital_name'),
				referring_physician : this.model.get('referring_physician'),

			}));
			this.delegateEvents();
			return this;
		}

	});

})(jQuery);
