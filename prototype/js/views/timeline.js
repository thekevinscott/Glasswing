(function($){
	glasswing.views.report = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('report.html'),
		events : {
		  "click .actions input[type=button]" : "saveProcedure"
		},
		initialize : function(attributes) {

        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	// console.log(attributes);
			this.name = this.model.get('name');

			this.url = 'procedure/'+this.model.get('id');

			var self = this;

			setTimeout(function(){
				// console.log('change the model');
				self.model.set('images',10);

				// console.log(self.model.get('images'));
			},1500);

			var view = this;

			// two things need to happen.
			this.model.on('change', function(){
				console.log('this sucks, should go in the model code');
				_.each(this.changedAttributes(),function(val,key){

					if (view.$el.is(":visible")) {
						view.notify({key : key, val : val});
					} else {
						view.addNotification({key : key, val : val});
					}
				});

				// tab manager needs to be notified. but if the tab is active, then do nothing.
				this.collection.view.tabManager.notify(view, {}); // pass in an optional attributes array

			}); // attempt to bind to model change event


		},
		addNotification : function(obj) {
			this.notification_elements.push(obj);
		},
		notify : function(obj) {

			var el = this.$el.find('.'+obj.key);
			var span = el.find('span');
			span.html(obj.val);
			el.notify();

		},
		afterRender : function() {
			while(this.notification_elements.length > 0) {

				this.notify(this.notification_elements.shift());
			}

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
				images : this.model.get('images'),

			}));
			this.delegateEvents();
			this.afterRender();
			return this;
		}

	});

})(jQuery);
