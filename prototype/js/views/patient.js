//'lib/text!templates/patient.html'
(function($){
	glasswing.views.patient = glasswing.views.abstract.extend({
		tagName : 'div',

		// template_html : 'patient.html',

		template : glasswing.template('patient.html'),
		initialize : function() {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);
			if (this.model) {
				this.model.view = this;
				this.$el.html(_.template(this.template, {
					name : "Name: " + this.model.getName(),

				}));
			}


		},
		render : function() {
			return this;
		}

	});

})(jQuery);