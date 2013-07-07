(function($){
	glasswing.views.notifications = glasswing.views.abstract.extend({

		// model : new worklist(),
		className : 'notifications',
		template : glasswing.template('notifications.html'),
		events : {
		},
		initialize : function(attributes) {

        	this.render();
        	this.collection = new glasswing.collections.notifications();
		},
		render : function() {
			var self = this;

			self.$el.html(_.template(this.template, {

			}));
			$('.tabs').prepend(self.$el);



			// self.button.unbind('click').click(function(){

			// 	$(self.$el).modal({
			// 		button : this
			// 	})


			// });
			return self;
		},
		addNotification : function() {

		}
	});
})(jQuery);