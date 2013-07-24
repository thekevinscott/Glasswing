(function($){
	$.fn.tooltip = function(options) {
		var defaults = {
		}
		options = $.extend(defaults,options);

		return $(this).each(function(){

			var self = $(this);

			self.addClass('tooltip');
			self.data('alt',self.attr('alt'));
			self.removeAttr('alt');

			// self.modal({content : self.data('alt'), overlay : false, close : false, show : false});
			if (self.data('modal-element')) {
				self.data('modal-element').content.html(self.data('alt'));
			}
			self.mouseover(function(){
				self.modal({content : self.data('alt'), overlay : false, close : false, show : false});
			}).mouseout(function(){
				self.modal.close(self);
			});
			self.click(function(e){
				e.stopPropagation();
			});

		});

	}
	var checkForNewElements = function() {
		$('body *[alt]').tooltip();
		setTimeout(checkForNewElements,200);
	}
	checkForNewElements();

})(jQuery);