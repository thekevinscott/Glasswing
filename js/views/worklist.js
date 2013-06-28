define([
	'underscore',
	'backbone',
	'models/worklist',
	'lib/text!templates/worklist/table.html',
	'lib/text!templates/worklist/procedure.html'
], function(_, Backbone, worklist, template, row) {

	return Backbone.View.extend({
		tagName : 'div',
		className : 'worklist',
		// model : new worklist(),
		template : template,
		initialize : function(options) {

			this.name = 'Worklist';
			this.url = 'worklist';
			// this.procedures = options.procedures;

			// options.procedures.bind('add', this.addProcedure);

			this.collection.view = this;

			// this.model.view = this;
			// this.$tbody = this.$el.find('tbody');
			// console.log(this.$tbody);
			// this.$el.html('suck');

		},
		addProcedure : function(procedure) {

			this.$tbody.append(_.template(row, {
				id : procedure.get('id'),
				first : procedure.get('patient').get('first'),
				last : procedure.get('patient').get('last'),
				referring_physician : procedure.get('referring_physician')
			}));

		},

		render : function() {
			this.$el.html(_.template(this.template, {}));
			this.$table = this.$el.find('table');
			this.$tbody = this.$table.find('tbody');
			return this;
		}

	});
});
