(function($){
	glasswing.views.timeline = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('timeline/index.html'),
		events : {
		  "click .actions input[type=button]" : "saveProcedure"
		},
		initialize : function(attributes) {

        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);
        	this.render();
		},
		render : function() {
			console.log(this.$el);
			this.$el.html(_.template(this.template, {

			}));
			this.delegateEvents();

			return this;
		}

	});

})(jQuery);
