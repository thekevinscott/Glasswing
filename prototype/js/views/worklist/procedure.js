(function($){
	glasswing.views.procedure = glasswing.views.abstract.extend({
		events : {
			"click" : "click"
		},

		initialize : function(attributes) {

			this.model = attributes.model;
			this.layout = 'table';
			this.name = this.model.get('name');
			//this.render(true);
		},
		render : function(force) {
			// if (force || this.model.hasChanged()) {
			// 	// we should cache rendering and only return it on damage to the model

			var opts = {
				id : this.model.get('id'),
				scanned_documents : this.model.get('scanned_documents'),
				dob : this.model.get('patient').get('dob'),
				first : this.model.get('patient').get('first'),
				last : this.model.get('patient').get('last'),
				gender : this.model.get('patient').get('gender'),
				patient_id : this.model.get('patient').get('id'),
				patient_risks : this.model.get('patient').get('risks'),
				procedure_name : this.model.get('this.model_name'),
				priority : this.model.get('priority'),
				procedure_class : this.model.get('this.model_class'),
				report_status : this.model.get('report_status'),
				procedure_status : this.model.get('this.model_status'),
				referring_physician : this.model.get('referring_physician'),
				hospital_name : this.model.get('hospital_name')
			};
			this.$table = $(_.template(glasswing.template('worklist/row'),opts));
			$(this.$table).data('view',this);
			this.$card = $(_.template(glasswing.template('worklist/card'),opts));
			$(this.$card).data('view',this);

			this.$report = $(_.template(glasswing.template('report/index'),opts));

			// }

			this.$el = this['$'+this.layout];
			// this.$el = 'sucker';
			this.delegateEvents();

			return this;
		},
		click : function() {
			// alert('click');
			// var model = $(event.currentTarget).data('model');

			//this.layout = 'report';
			this.model.worklist.tabManager.showPage(new glasswing.views.report(this.model));

		},
		setLayout : function(layout) {
			this.layout = layout;
		},
		getTemplate : function(callback) {
			if (this.template_html) {

				var self = this;
				$.get('js/templates/'+self.template,function(data){
					self.template = data;
					callback();
				});
			}
		}

	});

})(jQuery);
