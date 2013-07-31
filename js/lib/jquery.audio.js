(function($){
	var log = function(msg) {
		if (0) { console.log(msg); }
	}
	$.fn.audio = function(events,caller){
		log('events!');
		log(events);
		return $(this).each(function(){
			var audio = $(this)[0];
			var currentTime = audio.currentTime;
			var start_seek = null;

			var getCurrentTimeInterval;

			if ($(this).data('getCurrentTimeInterval')) {
				clearInterval($(this).data('getCurrentTimeInterval'));
			}


			var getCurrentTime = function() {

				for (var time in events) {
					time = parseFloat(time);

					if (currentTime <= time && audio.currentTime > time && typeof events[time] == 'function') {

						events[time](caller);
					}
					if (time > audio.currentTime) { break; }
				}


				currentTime = audio.currentTime;


			}
			getCurrentTime();
			getCurrentTimeInterval = setInterval(getCurrentTime,100);

			$(this).data('getCurrentTimeInterval',getCurrentTimeInterval);


			// this.removeEventListener('seeked').addEventListener('seeked',function(e){
			// 	start_seek = audio.currentTime;
			// 	log('seeked');
			// 	log(e);
			// });
			// this.removeEventListener('seeking').addEventListener('seeking',function(e){
			// 	log('seeking');
			// 	log(e);
			// });

		});
	}
})(jQuery);