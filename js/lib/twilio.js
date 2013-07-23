(function($){
	glasswing.twilio = function() {
		// var token_url = 'http://www.hcii.cmu.edu/M-HCI/2013/Glasswing/twilio/token.php';
		var token_url = 'http://herdingpixels.com/twilio/token.php';
		// var token_url = '../twilio/token.php';
		var listeners = {};

		var called_ready = false;
		var setupTwilio = function(attb) {
			var token = attb.token;
			Twilio.Device.setup(token);
			_.each(['ready','error','connect','disconnect'],function(key){
				if (key=='ready' && called_ready) {

				} else {
					Twilio.Device[key](function (args) {
						// console.log(key);
						if (listeners[key]) {
							// console.log('we have a listener');
							listeners[key](args);
						}
					});
				}



			});
		}




		var call = function(number) {
			if (window.hasOwnProperty('Twilio')) {
				connection = Twilio.Device.connect({ "number" : number});
			} else {
				throw("Twilio not set up yet");
			}
		}
		var hangup = function() {
			if (window.hasOwnProperty('Twilio')) {
				Twilio.Device.disconnectAll();
			} else {
				throw("Twilio not set up yet");
			}

		}
		var addListener = function(key,func) {
			if (key=='ready' && window.hasOwnProperty('Twilio')) {
				func();
			} else {
				listeners[key] = func;
			}

		}


		$.ajax({
			url : token_url,
			dataType : 'jsonp',
			data : {ajax : true},
			// complete : function() {alert('c');},
			// error : function() {alert('e');},
			success : function(data) {

				var script = document.createElement( 'script' );
				script.type = 'text/javascript';
				script.src = 'http://static.twilio.com/libs/twiliojs/1.0/twilio.min.js';
				$("body").append( script );
				var setTimer = function() {
					if (window.hasOwnProperty('Twilio')) {
						// console.log('ready');
						setupTwilio(data);
					} else {
						setTimeout(function(){
							setTimer();
						},200);
					}
				}
				setTimer();


			}
		});



		return {
			call : call,
			hangup : hangup,
			addListener : addListener
		}
	}();
})(jQuery);