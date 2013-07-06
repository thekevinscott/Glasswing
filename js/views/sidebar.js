(function($){
	glasswing.views.sidebar = glasswing.views.abstract.extend({
		bookmark : [],

		initialize : function(attributes) {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);
			// parse our chapters

			this.parent = attributes.parent;
			this.chapters = attributes.chapters.chapters;

			this.render();


			var first_chapter = attributes.chapters.chapters_by_order[0];
			this.bookmark = [first_chapter.title.toURL(),first_chapter.panes_by_order[0].title.toURL()]; // set to first.


		},
		render : function() {
			var self = this;



			// set the chapter id
			var chapter_count = 0;

			for (var key in this.chapters) {
				self.chapters[key].view = new glasswing.views.chapter({
					parent : this,
					data : $.extend({key : key},this.chapters[key]),
				});
				self.chapters[key].view.index = chapter_count;
				this.$el.append(  this.chapters[key].view.$el );
				this.chapters[key].view.$el.css({marginLeft: (chapter_count*100)+'%'});
				chapter_count++;
			}
			this.$el.data('width',this.$el.width() / $('body').width() * 100);

			this.$audio = $('<audio controls></audio>');
			this.$el.prepend(this.$audio);
			// var chapter_progress = $('<div class="chapter-progress" />');
			// this.$el.prepend(chapter_progress);
			// chapter_progress.progressBar({pages : chapter_count});

			this.progress = new glasswing.views.progress({sidebar : this });


			return this;
		},

		// this function translates an arguments array (a collection of URL segments)
		// into the internal bookmark that sidebar maintains
		route : function(arguments, options) {
			var self = this;
			var setChapter = function(arguments) {
				console.log(self.chapters);
				console.log(arguments);
				if (self.chapters[arguments[0]]) {
					self.bookmark = [arguments[0],self.chapters[arguments[0]].panes_by_order[0].title.toURL()];
					//setChapter();
				}
			}
			// if (! arguments) { return; }
			if (arguments) {
				switch(arguments.length) {
					case 1 :
						setChapter(arguments);
					break;
					case 2 :
						if (this.chapters[arguments[0]] && this.chapters[arguments[0]].panes[arguments[1]]) {
							this.bookmark = [arguments[0],arguments[1]];
						}
						// if its not a valid route, lets try the first URL segment
						else {
							setChapter(arguments);
						}
					break;
				}
			}
			this.selectChapterAndSection(this.bookmark);

			this.progress.setRoute(this.chapters[this.bookmark[0]]);

		},
		selectChapterAndSection : function(bookmark) {
			this.parent.router.navigate(bookmark.join('/'));

			var view = this.chapters[bookmark[0]].view;
			var section = view.panes[bookmark[1]];

			//var duration = 200*Math.abs(view.index-chapter_view.index);
			//if (duration > 1000) { duration = 1000; }
			var duration = 620;

			$('.chapter').each(function(){
				var chapter = $(this);

				var chapter_view = chapter.data('view');

				$(this).stop().animate({marginLeft : (0-(100*(view.index-chapter_view.index)))+'%'},{duration: duration,easing: 'easeOutQuad'});

			});
			$(section).data('view').open();


			// if (! $(section).hasClass('active')) {
			// 	// find a pane
			// 	// $(this).open();
			// 	// console.log(this);
			// 	// self.parent.url($(this).data('url'));
			// }
		},
		open : function() {
			console.log('open');
			var options = {left : 0};
			if (! self.parent.active) {
				options.marginLeft = 0;
				options.width = '100%';

			}



			this.parent.url(this.bookmark.join('/'));


		},
		close : function() {

			this.$el.animate({width: 0},this.parent.animation.page);
			console.log('close!');
		},
		minimize : function() {
			// $('#sidebar').animate({width: 160, height: 40, borderRadius: 5, zIndex: 10, bottom: '5%', left: '5%', top: 'none', boxShadow: '0 0 5px #000', opacity: 0.8});

		},
		navigate : function(path,options) {

			this.parent.navigate(path,options);
		}

	});

})(jQuery);
