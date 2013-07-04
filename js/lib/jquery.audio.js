(function($){

	$.fn.audio = function(events){
		return $(this).each(function(){
			var audio = $(this)[0];
			var currentTime = audio.currentTime;
			var start_seek = null;

			// audiojs.events.ready(function() {
			//     var as = audiojs.createAll();
			// });

			// this is fucked on chrome
			// this.addEventListener('progress',function(){
			// 	console.log(this);
			// });


			var getCurrentTime = function() {

				for (var time in events) {
					time = parseFloat(time);
					if (currentTime < time && audio.currentTime > time && typeof events[time] == 'function') {

						events[time]();
					}
					if (time > audio.currentTime) { break; }
				}


				currentTime = audio.currentTime;

				setTimeout(getCurrentTime,100);
			}
			getCurrentTime();


			this.addEventListener('seeked',function(e){
				start_seek = audio.currentTime;
				console.log('seeked');
				console.log(e);
			});
			this.addEventListener('seeking',function(e){

				console.log('seeking');
				console.log(e);
			});

		});
	}
})(jQuery);