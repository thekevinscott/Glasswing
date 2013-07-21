(function($){
	$.fn.hint = function(){
		return $(this).each(function(){
			var el = $(this);

			el.data('placeholder',el.val());
			el.addClass('hint');
			el.focus(function(){
				el.removeClass('hint');
				if (el.val() === el.data('placeholder')) {

					el.val('');
				}
			}).blur(function(){
				if (el.val() == '') {

					el.val(el.data('placeholder'));
					el.addClass('hint');
				}
			})
		});
	}
})(jQuery);