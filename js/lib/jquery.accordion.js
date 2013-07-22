(function($){
	$.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete){
	    return this.each(function(){
	        var elem = $(this);

	        $({deg: startAngle}).animate({deg: endAngle}, {
	            duration: duration,
	            easing: easing,
	            step: function(now){
	                elem.css({
	                  '-moz-transform':'rotate('+now+'deg)',
	                  '-webkit-transform':'rotate('+now+'deg)',
	                  '-o-transform':'rotate('+now+'deg)',
	                  '-ms-transform':'rotate('+now+'deg)',
	                  'transform':'rotate('+now+'deg)'
	                });
	            },
	            complete: complete || $.noop
	        });
	    });
	};
	$.fn.accordion = function(options) {


		var accordion = $(this);
		var header_height = $(this).find('.header').outerHeight();
		var top = accordion.offset().top;
		// var height = accordion.offset().top;
		var getTargetHeight = function() {
			var height = top + 60; // padding on bottom
			accordion.find('.pane').each(function(){
				// height += header_height;
				if (! $(this).hasClass('collapsed')) {
					height += $(this).data('height');
				}
			});
			// console.log(height);
			return height;
		}
		var setSlaveHeight = function(attb) {
			if (! attb.easing) { attb.easing = 'linear'; }
			if (options.slave) {
				if (attb.duration < 10) {
					options.slave.css({top: getTargetHeight()});
				} else {
					options.slave.animate({
						top: getTargetHeight()
					}, {easing : attb.easing, duration : attb.duration });
				}

			}
		}

		var toggle = function(e) {
			if (e) { e.preventDefault(); }


			var arrow = $(this);
			var pane = $(this).parents('.pane');
			var accordion = pane.parents('.accordion');

			var content = pane.find('.content');
			var duration = 300;
			var easing = 'linear';
			if (pane.hasClass('collapsed')) {
				// open
				easing = 'easeOutQuad';
				content.stop().slideDown({duration: duration, easing : easing});
				arrow.animateRotate(-90,0,duration);
				pane.removeClass('collapsed');
			} else {
				// close
				easing = 'easeInQuad';
				content.stop().slideUp({duration: duration, easing : easing});
				arrow.animateRotate(0,-90,duration);
				pane.addClass('collapsed');

			}
			setSlaveHeight({easing : easing, duration : duration});

		}

		var panes = accordion.find('.pane');

		panes.each(function(){
			var arrow = $('<div class="arrow"></div>');
			var pane = $(this);
			pane.data('height',pane.outerHeight() - header_height);
			var header = pane.find('.header');
			header.prepend(arrow);
			arrow.click(toggle);
		});
		setSlaveHeight({duration: 1});
	}

})(jQuery);

var ringNotif = function(el) {
	var count = 4;
	var inc = 0;
	var timeout = 1200;
	var duration = 60;
	var amount = 10;

	var r = function() {
		if (inc < count) {
			ring(el,0-amount,amount,duration);
			inc++;
			setTimeout(r,timeout);
			console.log(el);
			el.find('img').css({boxShadow: '0 0 50px #fff'});
		}


	}
	r();

}
var ring = function(el,start,end, duration) {
	var decay = 0.7;
	$(el).css({'-webkit-transform-origin' : '50% 0'  })
	var r = function(start,end) {
		$(el).animateRotate(start,end,duration,'linear',function(){
			if (Math.abs(start) > 1) {
				r(end*decay,start*decay);
			}

		});
	}
	r(start,end);

}