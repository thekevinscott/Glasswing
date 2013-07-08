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
        	this.notifications = [];
		},
		render : function() {
			var self = this;

			self.$el.html(_.template(this.template, {

			}));
			self.$content = self.$el.find('.content');

			$('.tabs').prepend(self.$el);
			self.$sheet = self.$el.find('.sheet');

			self.$el.mouseover(function(){
				self.$el.removeClass('new');
				self.$content.html('No new notifications');
				self.notifications = [];
				self.$sheet.show();
			}).mouseout(function(){
				self.$sheet.hide();
				self.$sheet.find('.new').removeClass('new');
			})

			// this.addNotification('<strong>Wise, Sam</strong><br />All images have been uploaded.');
			// this.addNotification('<strong>Holman, Daniel\'s</strong> report has been approved.');
			return self;
		},
		addNotification : function(notification) {
			this.$el.addClass('new');
			var notification_el = $('<li class="new"><a href="javascript:;">'+notification+'</a></li>');
			this.notifications.push(notification_el);
			if (this.notifications.length==1) {
				this.$content.html('1 new notification');
			} else {
				this.$content.html(this.notifications.length+ ' new notifications');
			}

			this.$sheet.find('.all').before(notification_el);
			notification_el.click(function(e){
				console.log(e);
			});
		}
	});
})(jQuery);