(function($){
	glasswing.views.procedure = glasswing.views.abstract.extend({
		events : {
			"click" : "click",
			"mouseover *" : "mouseover",
			"mouseout *" : "mouseout",
		},

		initialize : function(attributes) {

			this.model = attributes.model;
			this.layout = 'table';
			this.name = this.model.get('name');
			//this.render(true);
		},
		render : function() {
			// if (force || this.model.hasChanged()) {
			// 	// we should cache rendering and only return it on damage to the model

			var opts = {
				id : this.model.get('id'),
				attachments : this.model.get('attachments'),
				dob : this.model.get('patient').getDob(),
				first : this.model.get('patient').get('first'),
				last : this.model.get('patient').get('last'),
				gender : (this.model.get('patient').get('gender') == 'f') ? 'FEMALE' : 'MALE',
				patient_id : this.model.get('patient').get('id'),
				patient_risks : this.model.get('patient').get('risks'),
				procedure_name : this.model.getName(),
				priority : this.model.get('priority'),
				procedure_class : this.model.get('procedure_class'),
				report_status : this.model.get('report_status'),
				procedure_status : this.model.get('procedure_status'),
				referring_physician : this.model.get('referring_physician'),
				hospital_name : this.model.get('hospital_name'),
				clinical_indication : this.model.get('clinical_indication'),
				end_time : this.model.getDate('end_time'),
				stat : ( (this.model.isStat()) ? 'stat' : null  )
			};

			this['$table'] = $(_.template(glasswing.template('worklist/row'),opts));
			this['$table'].data('view',this);
			this['$card'] = $(_.template(glasswing.template('worklist/card'),opts));
			this['$card'].data('view',this);
			this['$grid'] = $(_.template(glasswing.template('worklist/grid-row'),opts));
			this['$grid'].data('view',this);


			this.$el = this['$'+this.layout];

			this.$el.data('view',this);

			this.delegateEvents();

			return this;
		},
		click : function() {

			// var model = $(event.currentTarget).data('model');

			//this.layout = 'report';
			//if (! this.report) { this.report = new glasswing.views.report(this.model); }

			this.model.worklist.tabManager.showPage(this.getReport());

		},
		setLayout : function(layout) {
			this.layout = layout;
		},
		getReport : function() {
			if (! this.report) {
				this.report = new glasswing.views.report({model: this.model});
			}
			return this.report;
		},
		mouseover : function(event) {
			var el = $(event.currentTarget);
			if (el.attr('class')) {
				var clss = el.attr('class').replace('highlight','').trim();
				// console.log('add to: ' + clss);
				$('.'+clss).addClass('callout');
			}

		},
		mouseout : function() {
			$('.callout').removeClass('callout');
			// var el = $(event.currentTarget);
			// var clss = el.attr('class').replace('highlight','').trim();
			// console.log('remove from: ' + clss);
			// $('.'+clss).removeClass('highlight');
		}
		// getTemplate : function(callback) {
		// 	if (this.template_html) {

		// 		var self = this;
		// 		$.get('js/templates/'+self.template,function(data){
		// 			self.template = data;
		// 			callback();
		// 		});
		// 	}
		// }


	});

})(jQuery);
