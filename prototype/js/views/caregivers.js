(function($){
	glasswing.views.caregivers = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',
		className : "prior",
		template : glasswing.template('caregivers.html'),
		events : {
		},
		initialize : function(attributes) {
			this.parent = attributes.parent;
			this.data = attributes.data;
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;

			return self;
		},
	});
})(jQuery);