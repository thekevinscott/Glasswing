(function($){
	$.dehighlight = function() {
		$('.overlay').fadeOut().remove();
	}
	$.fn.highlight = function() {
		return $(this).each(function(){

			$('.overlay').remove();
			var overlay = $('<div class="overlay" />');
			var body = $(this).parents('body');
			body.append(overlay);

			var x, y, w, h;

			var blur = 4;

			var parent = body;
			var el = $p(this);
			// parent = $('table');

			// x = ($(el).position().left - (blur*1)) / parent.width() * 100;
			// //y = 29.5;
			// // y = jQuery('table tr:first').position().top;

			// y = ($(el).position().top - (blur*1)) / parent.height() * 100;
			// w = ($(el).width() + (blur*2)) / parent.width() * 100;
			// h = ($(el).height() + (blur*2)) / parent.height() * 100;


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

			var makeOverlay = function(t,r,b,l) {
				overlay.append('<div class="piece" style="top: '+t+'; left: '+l+'; width: '+r+'; height: '+b+';" ></div>');
			}
			// overlay.append('<div class="piece" style="top: 0; left: 0; width: '+x+'%; height: 100%; box-shadow: '+blur+'px 0 '+blur+'px #000"></div>');
			// overlay.append('<div class="piece" style="top: 0; left: '+(x+w)+'%; width: '+(100-x-w)+'%; height: 100%; box-shadow: -'+blur+'px 0 '+blur+'px #000"></div>');

			// overlay.append('<div class="piece" style="top: 0; left: '+x+'%; width: '+w+'%; height: '+y+'%; box-shadow: 0 '+blur+'px '+blur+'px #000"></div>');
			// overlay.append('<div class="piece" style="top: '+(y+h)+'%; left: '+x+'%; width: '+w+'%; height: '+(100-y-h)+'%; box-shadow: 0 -'+blur+'px '+blur+'px #000"></div>');


			// overlay.append('<div class="piece" style="top: 0; left: 0; width: '+x+'%; height: 100%;" ></div>');
			// overlay.append('<div class="piece" style="top: 0; left: '+(x+w)+'%; width: '+(100-x-w)+'%; height: 100%;" ></div>');

			//makeOverlay(0,x+w,y,x);
			//overlay.append('<div class="piece" style="top: 0; left: '+x+'; width: '+w+'; height: '+y+';" ></div>');

			// overlay.append('<div class="piece" style="top: '+(y+h)+'; left: '+x+'; width: '+w+'; height: '+(100-y-h)+';" ></div>');
			overlay.css({opacity :0}).animate({opacity: 0.5},1000);

			var monitorEl = function(el) {
				setTimeout(function(){
					// console.log(el.data);
					// console.log(el.data('position'));
					// console.log(JSON.stringify(el.data('position')));
					// console.log(JSON.stringify(el.position()));
					if (JSON.stringify(el.data('position')) != JSON.stringify(el.position())) {
						console.log('does not equal');
						makeOverlays(el);
						el.data('position',el.position());
					}
					monitorEl(el);
				},90);
			}

			monitorEl(el);


			// $('#glasswing tr').click(function(e){
			// 	overlay.find('.piece').animate({opacity: 0},500);
			// 	$('.active').close();
			// 	$(active.parent().find('.pane')[1]).open();

			// });
		});
	}
})(jQuery);