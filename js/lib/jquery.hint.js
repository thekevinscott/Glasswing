(function($){
	$.fn.hint = function(){
		return $(this).each(function(){
			var el = $(this);

			var addHint = function() {
				el.val(el.data('placeholder'));
				el.addClass('hint');
			}
			el.data('placeholder',el.attr('hint'));

			if (! el.val()) {
				addHint();
			}
			el.focus(function(){
				el.removeClass('hint');
				if (el.val() === el.data('placeholder')) {

					el.val('');
				}
			}).blur(function(){
				if (el.val() == '') {
					addHint();
				}
			})
		});
	}
	$.fn.value = function() {
		if ($(this).hasClass('hint')) {
			if ($(this).data('placeholder')==$(this).val()) {
				return null;
			} else {
				return $(this).val();
			}
		} else {
			return $(this).val();
		}

	}
})(jQuery);