(function($){
	glasswing.views.notifications = glasswing.views.abstract.extend({

		// model : new worklist(),
		className : 'notifications',
		template : glasswing.template('notifications.html'),
		events : {
		},
		initialize : function(attributes) {
			this.tabManager = attributes.tabManager;
        	this.render();
        	// this.collection = new glasswing.collections.notifications();
        	this.notifications = [];
        	this.pulser = null;
		},
		render : function() {
			var self = this;

			self.$el.html(_.template(this.template, {

			}));
			self.$content = self.$el.find('.content');

			$('.header .system').prepend(self.$el);
			self.$sheet = self.$el.find('.sheet');

			self.$el.mouseover(function(){
				self.$el.removeClass('new');
				this.$el.find('img').attr('src','images/notification.png');
				self.$content.html('No new notifications');
				self.notifications = [];
				self.$sheet.show();
			}).mouseout(function(){
				self.$sheet.hide();
				self.$sheet.find('.new').removeClass('new');
				this.$el.find('img').attr('src','images/notification.png');
			})

			// this.addNotification('<strong>Wise, Sam</strong><br />All images have been uploaded.');
			// this.addNotification('<strong>Holman, Daniel\'s</strong> report has been approved.');
			return self;
		},
		addNotification : function(obj) {
			var message = obj.message;
			var view = obj.view;
			var self = this;

			this.$el.addClass('new');

			this.$('img').attr('src','images/notification_on.png').css({width: 20, height: 20, marginTop: -1, marginLeft: -1});
			var notification = $('<li class="new"><a href="javascript:;">'+message+'</a></li>');
			self.notifications.push(obj);
			self.pulser = setTimeout(function(){
				self.pulse();
			},500);
			// if (this.notifications.length==1) {
			// 	this.$content.html('1 new notification');
			// } else {
			// 	this.$content.html(this.notifications.length+ ' new notifications');
			// }

			this.$sheet.find('.all').before(notification);
			notification.click(function(e){
				console.log(view);
				self.tabManager.showPage(view);
			});
		},
		pulse : function() {
			var self = this;
			var size = 20;
			var img = $(self.$('img'));

			if (img.css('opacity')==1) {
				img.animate({opacity: 0.7, width: 16, height: 16, marginTop: 0, marginLeft: 0},{duration: 480});
			} else {
				img.animate({opacity: 1, width: size, height: size, marginTop: -1, marginLeft: -1},{duration: 480});
			}

			self.pulser = setTimeout(function(){
				self.pulse();
			},500);
		}
	});
})(jQuery);