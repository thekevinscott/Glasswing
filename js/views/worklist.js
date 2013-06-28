define([
	'underscore',
	'backbone',
	'models/worklist',

	'models/patient',
	'models/procedure',
	'lib/text!templates/worklist/table.html',
	'lib/text!templates/worklist/procedure.html'
], function(_, Backbone, worklist, patient, procedure, template, row) {

	return Backbone.View.extend({
		tagName : 'div',
		className : 'worklist',
		// model : new worklist(),
		template : template,
		events : {
		  "click tbody tr" : "openProcedure"
		},
		initialize : function(options) {
			console.log('init');
			console.log(this.model);

			//this.worklist = new worklistCollection();

			this.name = 'Worklist';
			this.url = 'worklist';

			this.model.view = this;



		},
		openProcedure : function(event) {
			var model = $(event.currentTarget).data('model');

			window.location.hash = 'procedure/' + model.get('id');
			console.log("is it maybe a bit clunk to change the url directly?");
			//Router.navigate('procedure/' + model.get('id'), {trigger: true, replace: true});
			// I think the above'd be better

		},
		drawProcedure : function(procedure) {

			var row_el = _.template(row, {
				id : procedure.get('id'),
				first : procedure.get('patient').get('first'),
				last : procedure.get('patient').get('last'),
				referring_physician : procedure.get('referring_physician')
			});

			this.$tbody.append(row_el);


			// I wish this worked. basically, need to figure out how to take underscore's raw text and convert it to jquery
			// $(row_el).data('model','1234');

			// instead i have to select the fucking element that sucks a pig's asshole
			this.$tbody.find('#procedure-'+procedure.get('id')).data('model',procedure);

		},

		render : function() {
			var self = this;
			this.$el.html(_.template(this.template, {}));
			this.$tbody = this.$el.find('table tbody');
			_.each(this.model.getProcedures(),function(procedure, index){
				self.drawProcedure(procedure);
			});
			this.delegateEvents();
			return this;
		}

	});
});
