(function($){
	glasswing.views.caregivers = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',
		template : glasswing.template('caregivers.html'),
		events : {
		},
		initialize : function(attributes) {
			console.log(attributes);
			this.collection = attributes.collection;

        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;
			console.log(self);
			console.log(self.collection);
			this.$el.html(_.template(this.template, {

				caregivers : this.collection

			}));
			return self;
		},
	});
})(jQuery);