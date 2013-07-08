(function($){
	glasswing.views.notifications = glasswing.views.abstract.extend({

		// model : new worklist(),
		className : 'notifications',
		template : glasswing.template('notifications.html'),
		events : {
		},
		initialize : function(attributes) {

        	this.render();
        	// this.collection = new glasswing.collections.notifications();

		},
		render : function() {
			var self = this;

			self.$el.html(_.template(this.template, {

			}));

			$('.tabs').prepend(self.$el);
			self.$sheet = self.$el.find('.sheet');

			self.$el.mouseover(function(){
				self.$el.removeClass('new');
				self.$sheet.stop().slideDown();
			}).mouseout(function(){
				self.$sheet.stop().slideUp(function(){
					self.$sheet.find('.new').removeClass('new');
				});
			})

			// this.addNotification('<strong>Wise, Sam</strong><br />All images have been uploaded.');
			// this.addNotification('<strong>Holman, Daniel\'s</strong> report has been approved.');
			return self;
		},
		addNotification : function(notification) {
			this.$el.addClass('new');
			this.$sheet.find('.all').before('<li class="new">'+notification+'</li>');
		}
	});
})(jQuery);