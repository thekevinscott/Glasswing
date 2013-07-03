(function($){
	glasswing.views.procedure = glasswing.views.abstract.extend({

		initialize : function(attributes) {

			this.model = attributes.model;
			this.table_template = glasswing.template('worklist/row');
			this.card_template = glasswing.template('worklist/card');
			//this.render(true);
		},
		render : function(force) {
			if (force || this.model.hasChanged()) {
				// we should cache rendering and only return it on damage to the model
				console.log('render!');
				console.log(this.model);
				console.log(this.model.attributes);
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
				this.$table = $(_.template(this['table_template'],opts));
				$(this.$table).data('view',this);
				this.$card = $(_.template(this['card_template'],opts));
				$(this.$card).data('view',this);

			}

			this.$el = this.$table;

			return this;
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
