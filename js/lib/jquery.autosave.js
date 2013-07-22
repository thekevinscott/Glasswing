(function($){
	$.fn.autosave = function(options){
		return $(this).each(function(){

			var duration = 500;
			var timer;

			var notification_timer;
			var notification_duration = 1500;
			var notification_timer_duration = 2500;
			var autosave = function() {
				clearTimeout(notification_timer);
				options.notification.show();
				options.notification.css({opacity :1});
				notification_timer = setTimeout(function(){
					options.notification.stop().animate({opacity : 0.25},{duration : notification_duration});
				},notification_timer_duration);
			}
			$(this).keydown(function(e){
				clearTimeout(timer);
				timer = setTimeout(function(){
					autosave();
				},duration);
			});
			options.notification.mouseover(function(){
				options.notification.stop().animate({opacity : 1},{duration : 200});
			}).mouseout(function(){
				options.notification.stop().animate({opacity : 0.25},{duration : notification_duration});
			});


		});
	}
})(jQuery);