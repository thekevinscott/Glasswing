(function($){
	glasswing.views.sidebar = glasswing.views.abstract.extend({
		bookmark : [],

		initialize : function(attributes) {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);
			// parse our chapters

			this.parent = attributes.parent;
			this.chapters = attributes.chapters;

			this.render();

			this.bookmark = ['tabs','the-idea']; // set to first.


		},
		render : function(animate) {
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

			// var chapter_progress = $('<div class="chapter-progress" />');
			// this.$el.prepend(chapter_progress);
			// chapter_progress.progressBar({pages : chapter_count});

			this.progress = new glasswing.views.progress({sidebar : this});


			return this;
		},

		route : function(arguments) {

			// console.log('internal route');


			var setChapter = function() {

				if (arguments && arguments[0] && this.chapters[arguments[0]]) {
					// console.log(this.chapters[arguments[0]]);
					//this.bookmark = arguments[0] + '/' + this.chapters[arguments[0]];

				}
				// this.parent.router.navigate('suck');
			}
			// if (! arguments) { return; }
			if (arguments) {
				switch(arguments.length) {
					case 1 :
						if (this.chapters[arguments[0]]) {

							this.bookmark = [arguments[0],this.chapters[arguments[0]].panes_by_order[0].title.toURL()];
							setChapter();
						}

						// figure out the first section
					break;
					case 2 :

						if (this.chapters[arguments[0]] && this.chapters[arguments[0]].panes[arguments[1]]) {
							this.bookmark = [arguments[0],arguments[1]];
						}
						// if its not a valid route, lets try the first URL segment
						else {
							setChapter();
						}

					break;
				}
			}


			// and now open the right chapter and pane.

			// open chapter, and section
			// console.log('select chapter');
			this.parent.router.navigate(this.bookmark.join('/'));
			this.selectChapter(this.bookmark);


		},
		selectChapter : function(bookmark) {
			// if (typeof bookmark === 'string') { bookmark = [bookmark]; }



			var view = this.chapters[bookmark[0]].view;
			var section = view.panes[bookmark[1]];

			$('.chapter').each(function(){
				var chapter = $(this);

				var chapter_view = chapter.data('view');
				$(this).stop().animate({marginLeft : (0-(100*(view.index-chapter_view.index)))+'%'});

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
		addOverlay : function(el) {
			var overlay = $('<div class="overlay" />');
			$('#glasswing').append(overlay);

			var x, y, w, h;

			var blur = 10;

			var parent = $('#glasswing');
			// parent = $('table');

			x = ($(el).position().left - (blur*1)) / parent.width() * 100;
			//y = 29.5;
			// y = jQuery('table tr:first').position().top;

			y = ($(el).position().top - (blur*1)) / parent.height() * 100;
			w = ($(el).width() + (blur*2)) / parent.width() * 100;
			h = ($(el).height() + (blur*2)) / parent.height() * 100;



			overlay.append('<div class="piece" style="top: 0; left: 0; width: '+x+'%; height: 100%; box-shadow: '+blur+'px 0 '+blur+'px #000"></div>');
			overlay.append('<div class="piece" style="top: 0; left: '+(x+w)+'%; width: '+(100-x-w)+'%; height: 100%; box-shadow: -'+blur+'px 0 '+blur+'px #000"></div>');

			overlay.append('<div class="piece" style="top: 0; left: '+x+'%; width: '+w+'%; height: '+y+'%; box-shadow: 0 '+blur+'px '+blur+'px #000"></div>');
			overlay.append('<div class="piece" style="top: '+(y+h)+'%; left: '+x+'%; width: '+w+'%; height: '+(100-y-h)+'%; box-shadow: 0 -'+blur+'px '+blur+'px #000"></div>');
			overlay.find('.piece').css({opacity :0}).animate({opacity: 1},1000);


			$('#glasswing tr').click(function(e){
				overlay.find('.piece').animate({opacity: 0},500);
				$('.active').close();
				$(active.parent().find('.pane')[1]).open();

			});
		},
		navigate : function(path,options) {

			this.parent.navigate(path,options);
		}

	});

})(jQuery);
