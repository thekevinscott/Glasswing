alert('1');
(function($){
	$.fn.progressBar = function(options) {
		return $(this).each(function(){
			var bar = $('<div class="progress-bar" />');
			var progress = $('<div class="progress" />');
			$(this).html(bar);




			//parseInt($(this).css('marginLeft'))-100

			//bar.html(progress);
			//<div class="chapter filled"><div class="dot"></div></div>
		});
	}
	glasswing.views.progress = glasswing.views.abstract.extend({

		className : 'chapterProgress',
		template : glasswing.template('progress.html'),
		initialize : function(attributes) {
			glasswing.views.abstract.prototype.initialize.apply(this, attributes);
			this.sidebar = attributes.sidebar;
			this.render();


		},
		render : function(animate) {

			this.$pages = this.$el.find('.pages');
			var length = options.pages - 1;

			for (var i=0;i<options.pages;i++) {
				var chapter = $('<div class="page"><div class="dot"></div></div>');
				this.$pages.append(chapter);

				if (length >0) {
					chapter.css({left : (100 - ((100/length)*(length - i))  )+'%'});
				}
			}
			this.sidebar.$el.prepend(this.$el);

			return this;
		},


	});

})(jQuery);
