(function($){
	$.fn.hint = function(){
		return $(this).each(function(){
			console.log(this);
			var tagname = this.tagName;
			console.log(tagname);
			var val;

			switch(tagname.toLowerCase()) {
				case 'textarea' :
					val = $(this).html();
				break;
				default :
					val = $(this).val();
				break;
			}
			console.log(val);
		});
	}
})(jQuery);