(function($){
	var highlights = [];
	$.dehighlight = function(el) {
		var removeHighlight = function(el) {

			var highlight_timer = el.data('highlight_timer');

			var highlight = el.data('highlight');

			if (highlight) {
				clearInterval(highlight_timer);

				// var highlight = highlight.data('highlight');
				var animateHighlight = function(obj) {
					if (obj) {
						$(obj).animate({opacity : 0.0 }, function() {
							$(obj).remove();
						});
					}

				}

				_.each(highlight.pieces,animateHighlight);
				animateHighlight(highlight.content);


			}

			el.data('highlight',null);
		};
		if (el) {
			removeHighlight(el);
		} else {
			while(highlights.length) {
				var obj = highlights.shift();
				removeHighlight($(obj));
			}
		}

	}
	$.fn.dehighlight = function() {
		$.dehighlight(this);
	};
	$.fn.highlight = function(options) {

		options = $.extend({
			opacity : 0.5,
			content : '',
			bg_color : '000'
		},options);





		return $(this).each(function(){

			var overlay = {};

			// $('.overlay').remove();
			// $p('.overlay').remove();
			// $.dehighlight();

			// var overlay = $('<div class="overlay highlight" />');
			// var overlay_obj = {overlay : overlay};



			var overlay_obj = {};
			var body = $(this).parents('body');
			// body.append(overlay);

			var x, y, w, h;

			var blur = 0;


			var el = $p(this);
			x = el.position().left;// - (blur*1)) / parent.width() * 100;
			//y = 29.5;
			// y = jQuery('table tr:first').position().top;

			y = el.position().top;// - (blur*1)) / parent.height() * 100;
			w = el.outerWidth();// + (blur*2)) / parent.width() * 100;
			h = el.outerHeight();// + (blur*2)) / parent.height() * 100;


			var bg_color = '#'+options.bg_color;
			// var pieces = {};

			var makePieces = function(left,top,width,height,body_width,body_height,blur) {
				var pieces = {};
				// the left piece
				pieces.left = $('<div class="piece" style="top: '+0+'; left: '+0+'; width: '+left+'; height: '+body_height+'; box-shadow: '+blur+'px 0 '+blur+'px '+bg_color+'" ></div>');


				// the right piece
				pieces.right = $('<div class="piece" style="top: '+0+'; left: '+(left+width)+'; width: '+(body_width- left - width)+'; height: '+body_height+'; box-shadow: '+(0-blur)+'px 0 '+blur+'px '+bg_color+'" ></div>');

				// the top piece
				pieces.top = $('<div class="piece" style="top: '+0+'; left: '+left+'; width: '+width+'; height: '+top+'; box-shadow: 0 '+blur+'px '+blur+'px '+bg_color+'" ></div>');

				// the bottom piece
				pieces.bottom = $('<div class="piece" style="top: '+(top+height)+'; left: '+left+'; width: '+width+'; height: '+(body_height-top-height)+'; box-shadow: 0 '+(0-blur)+'px '+blur+'px '+bg_color+'" ></div>');

				return pieces;
			}
			var makeOverlays = function(el) {

				var left = el.offset().left - blur;
				var top = el.offset().top - blur;

				var width = el.outerWidth() + (blur*2);
				var height = el.outerHeight() + (blur*2);

				var body_width = body.outerWidth();
				var body_height = body.outerHeight();

				var piece = $('<div class="overlay piece" />');

				pieces = makePieces(left,top,width,height,body_width,body_height,blur);

				if (options.content) {
					var content = $('<div class="modal highlight"><div class="arrow"></div><div class="content"></div></div>');
					// overlay_obj.modal = modal;
					// body.append(modal);
					content.find('.content').html(options.content);
					content.css({left: left + (width/2), top: top+height+(blur)});
					// var shake = function(marginTop) {
					// 	if (! marginTop) { marginTop = -2; }
					// 	modal.animate({marginTop: marginTop}, {duration: 1600, easing: 'easeInOutQuad', complete : function() {
					// 		shake(marginTop*-1);
					// 	}});
					// }
					// shake();

				}
				return { pieces : pieces, content : content};


			}


			var highlight_timer;
			var monitorEl = function(el) {
				highlight_timer = setInterval(function(){
					// console.log('highlight');
					el.data('highlight_timer',highlight_timer);
					if (JSON.stringify(el.data('position')) != JSON.stringify(el.position())) {
						console.log('does not equal');

						el.data('position',el.position());


						// append each piece and each content


					}




					// if (highlight_timer) { monitorEl(el); }
				},90);
			}

			monitorEl(el);
			// highlights.push(overlay_obj);







			if (! el.data('highlight')) {
				// console.log('make new overlays');
				el.data('highlight',makeOverlays(el));


				_.each(el.data('highlight').pieces,function(piece){
					body.append(piece);
					piece.css({opacity : 0}).animate({opacity: options.opacity},1000);
					// pieces.push(piece);
				});

				if (el.data('highlight').hasOwnProperty('content')) {
					body.append(el.data('highlight').content);
				}

			} else {
				// console.log('it still exists');
			}
			highlights.push(el);

		});
	}
})(jQuery);