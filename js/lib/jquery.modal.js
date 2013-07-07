(function($){
	$.fn.modal = function() {
		var content = $('<div class="content" />');
		var arrow = $('<div class="arrow" />');
		var modal = $('<div class="modal" />');
		$(this).wrap(content);
		content.wrap(modal);
		content.before(arrow);
		return modal;
	}
})(jQuery);