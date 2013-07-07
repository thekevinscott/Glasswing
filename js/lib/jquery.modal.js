(function($){
	$.fn.modal = function(options) {
		var self = $(this);
		var button = $(options.button);




		$('body').append(self);

		var content = $(self).wrap('<div class="modal-content" />').parent();
		var modal = content.wrap('<div class="modal" />').parent();
		var arrow = $('<div class="arrow" />');
		var close = $('<a href="javascript:;" class="close" />');

		modal.prepend(arrow);
		modal.prepend(close);
		var overlay = $('<div class="modal-overlay" />');
		modal.before(overlay);

		var exit = function() {
			overlay.remove();
			modal.remove();
		}
		overlay.click(exit);
		close.click(exit);



		// var width = button.width();
		// var left = ($(button).position().left - 30 - width/2 ) + width/2;
		var left = button.position().left - (modal.outerWidth() / 2) + (button.width() / 2);
		var top = button.position().top + (button.outerHeight() + arrow.outerHeight());
		modal.css({left: left+'px', top: top});


	}
})(jQuery);