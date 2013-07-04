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

		className : 'chapter-progress',
		template : glasswing.template('progress.html'),
		events : {
			"click .dot" : "click"
		},
		initialize : function(attributes) {
			glasswing.views.abstract.prototype.initialize.apply(this, attributes);
			this.sidebar = attributes.sidebar;
			this.chapters = [];
			for (var key in this.sidebar.chapters) {
				this.chapters.push(this.sidebar.chapters[key]);
			}
			this.render();


		},
		render : function(animate) {
			this.$el.append($(_.template(this.template, {})));
			this.dots = [];

			this.$pages = this.$el.find('.pages');
			this.$progress = this.$el.find('.progress');
			var length = this.chapters.length - 1;

			for (var i=0;i<this.chapters.length;i++) {
				var dot = $('<div class="page"><a class="dot"></a></div>');
				this.$pages.append(dot);
				dot.data('model',this.chapters[i]);
				// console.log(this.chapters[i]);
				dot.data('url',this.chapters[i].title.toURL());
				this.chapters[i].dot = dot;
				this.dots.push(dot);
				if (length >0) {
					dot.css({left : (100 - ((100/length)*(length - i))  )+'%'});
				}
			}

			this.sidebar.$el.prepend(this.$el);


			return this;
		},
		click : function(event) {
			var chapter = $(event.currentTarget).parent();
			this.sidebar.route([chapter.data('url')]);
			this.setProgress(chapter.data('model'));
		},
		setProgress : function(model) {

			var index = model.dot.index();
			for (i=0;i<this.dots.length;i++) {
				if (i<=index) {
					this.dots[i].addClass('filled');
				} else {
					this.dots[i].removeClass('filled');
				}
			}
			// lets rebuild this thing with canvas

			// console.log(this.$el.width());
			// console.log(model.dot.position().left);
			// this.$progress.animate({width: (model.dot.position().left / this.$el.width() * 100) + '%'});

		}


	});

})(jQuery);
