(function($){
	glasswing.views.caregivers = glasswing.views.abstract.extend({

		// model : new worklist(),
		className : 'caregivers',
		// template_html : 'report/index.html',
		template : glasswing.template('caregivers.html'),
		events : {
		},
		initialize : function(attributes) {

			this.collection = attributes.collection;
			this.button = attributes.button;


        	// glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;

			// this.$el.html();
			// this.$el = $('<div class="modal"><div class="arrow"></div><div class="content">'+_.template(this.template, {

			// 	caregivers : this.collection.models

			// })+'</div></div>');

			self.$el.html(_.template(this.template, {

				caregivers : this.collection.models

			}));

			self.button.unbind('click').click(function(){


				$(self.button).modal({content: self.$el.html(), position: 'right'});


			});
			return self;
		},
	});
})(jQuery);