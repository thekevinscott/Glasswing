(function($){
	$.dehighlight = function() {
		$('.overlay').fadeOut().remove();
	}
	$.fn.highlight = function(options) {
		options = $.extend({
			opacity : 0.5
		},options);
		return $(this).each(function(){

			$('.overlay').remove();
			var overlay = $('<div class="overlay" />');
			var body = $(this).parents('body');
			body.append(overlay);

			var x, y, w, h;

			var blur = 4;

			var parent = body;
			var el = $p(this);
			x = el.position().left;// - (blur*1)) / parent.width() * 100;
			//y = 29.5;
			// y = jQuery('table tr:first').position().top;

			y = el.position().top;// - (blur*1)) / parent.height() * 100;
			w = el.width();// + (blur*2)) / parent.width() * 100;
			h = el.height();// + (blur*2)) / parent.height() * 100;


			var makeOverlays = function(el) {

				var left = el.position().left - blur;
				var top = el.position().top - blur;


				var width = el.outerWidth() + (blur*2);
				var height = el.outerHeight() + (blur*2);

				var parent_width = parent.width();
				var parent_height = parent.height();

				var piece = $('<div class="piece" />');
				var bg_color = '#000';


				// the left piece
				overlay.append('<div class="piece" style="top: '+0+'; left: '+0+'; width: '+left+'; height: '+parent_height+'; box-shadow: '+blur+'px 0 '+blur+'px '+bg_color+'" ></div>');

				// the right piece
				overlay.append('<div class="piece" style="top: '+0+'; left: '+(left+width)+'; width: '+(parent_width- left - width)+'; height: '+parent_height+'; box-shadow: '+(0-blur)+'px 0 '+blur+'px '+bg_color+'" ></div>');

				// the top piece
				overlay.append('<div class="piece" style="top: '+0+'; left: '+left+'; width: '+width+'; height: '+top+'; box-shadow: 0 '+blur+'px '+blur+'px '+bg_color+'" ></div>');

				// the bottom piece
				overlay.append('<div class="piece" style="top: '+(top+height)+'; left: '+left+'; width: '+width+'; height: '+(parent_height-top-height)+'; box-shadow: 0 '+(0-blur)+'px '+blur+'px '+bg_color+'" ></div>');

			}

			overlay.css({opacity :0}).animate({opacity: options.opacity},1000);

			var monitorEl = function(el) {
				setTimeout(function(){
					if (JSON.stringify(el.data('position')) != JSON.stringify(el.position())) {
						console.log('does not equal');
						makeOverlays(el);
						el.data('position',el.position());
					}
					monitorEl(el);
				},90);
			}

			monitorEl(el);

		});
	}
})(jQuery);