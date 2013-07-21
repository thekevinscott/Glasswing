(function($){
	$.fn.tooltip = function(options) {
		var defaults = {
		}
		options = $.extend(defaults,options);

		return $(this).each(function(){
			var self = $(this);
			self.data('alt',self.attr('alt'));
			self.removeAttr('alt');


			self.mouseover(function(){
				self.modal({content : self.data('alt'), overlay : false, close : false, show : false});
			}).mouseout(function(){
				self.modal.close(self);
			});

		});

	}
	var checkForNewElements = function() {
		$('body *[alt]').tooltip();
		setTimeout(checkForNewElements,200);
	}
	checkForNewElements();

})(jQuery);