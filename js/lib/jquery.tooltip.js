(function($){
	$.fn.tooltip = function(options) {
		var defaults = {
		}
		options = $.extend(defaults,options);

		return $(this).each(function(){
			console.log(this);
		});

	}
	var checkForNewElements = function() {
		$('body *[alt]').tooltip();
		setTimeout(checkForNewElements,200);
	}
	checkForNewElements();

})(jQuery);