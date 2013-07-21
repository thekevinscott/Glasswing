(function($){
	$.fn.contains = function(point) {
		var self = $(this);

		return (
			point.x > self.offset().left &&
			point.y > self.offset().top &&
			point.x < self.offset().left 	+ self.width() &&
			point.y < self.offset().top 	+ self.height()
			);
	}
	glasswing.views.dynamicContainer = glasswing.views.abstract.extend({
		initialize : function(attributes) {
			this.dragging = false;
			this.draggables = attributes.draggables;
			this.panes = [];
			this.render();

		},
		options : {
			threshold : {
				x : 0.18,
				y : 0.38
			}
		},
		render : function() {
			var self = this;

			this.content = $('.dynamic-content .container');
			var droppable = $('.dynamic-content .droppable');
			droppable.hide();

			this.draggables.each(function(){
				var draggable = $(this);

				var start_position; // our initial click.
				var click_offset; // where on our draggable did we click
				var current_position; // where is our mouse, relatively (compared to our start position);

				var contentContains = function(attributes) {
					var e = attributes.e;
					var draggable_offset = attributes.draggable_offset;
					var current_position = {x : e.clientX - start_position.x, y : e.clientY - start_position.y};
					var left = draggable_offset.left + current_position.x + 20;
					var top = draggable_offset.top + current_position.y + 10;

					var point = {x: left+click_offset.x, y : top+click_offset.y};

					if (attributes.content.contains(point)) {
						if (attributes.contains) {
							attributes.contains();
						}

					} else if (attributes.doesNotContain) {
						attributes.doesNotContain();

						// droppable.css({background: 'none'});

					}
				}




				draggable.unbind('mousedown').mousedown(function(e){
					e.preventDefault();
					start_position = {x : e.clientX, y : e.clientY };
					click_offset = {x : start_position.x - draggable.offset().left, y : start_position.y - draggable.offset().top };


					var left, top;

					var draggable_offset = draggable.offset();
					var clone;


					var createClone = function() {
						clone = draggable.clone();

						clone.css({opacity: 0.7, width: 200});
						clone.addClass('clone');
						$('body').append(clone);
						// console.log(draggable.offset());
						clone.css({left: draggable.offset().left + 20, top: draggable.offset().top + 10});
						// clone.css({left: 1200, top: 200});
						self.dragging = true;
					}



					$(window).unbind("mousemove").mousemove(function(e){
						if (! clone) { createClone(); }
						droppable.show();
						current_position = {x : e.clientX - start_position.x, y : e.clientY - start_position.y};

						left = draggable_offset.left + current_position.x + 20;
						top = draggable_offset.top + current_position.y + 10;

						clone.css({left: left, top: top});


						contentContains({e : e, draggable_offset : draggable_offset, content : self.content, contains : function(){

							droppable.addClass('hover');

							var position = 'full';
							if (self.panes.length) {
								var point = {x: left+click_offset.x, y : top+click_offset.y};
								position = self.getPosition(point,self.content);

							}
							self.positionPane({el : droppable, position : position});
						}, doesNotContain : function() {
							droppable.removeClass('hover');
						}});



					}).unbind('mouseup').mouseup(function(e){
						if (clone) {
							droppable.hide();

							droppable.removeClass('hover');



							// var cursor = {x: left+click_offset.x, y : top+click_offset.y};

							contentContains({e : e, content : self.content, draggable_offset : draggable_offset, contains : function(){
								var position = 'full';
								if (self.panes.length >= 1) {
									var point = {x: left+click_offset.x, y : top+click_offset.y};
									position = self.getPosition(point,self.content);
								}
								self.addPane({content : draggable.data('dynamic-content'), header : draggable.data('header'), clss : draggable.data('clss'), position: position});

							}});


							self.dragging = false;
							clone.remove();
						} else {
							self.addPane({content : draggable.data('dynamic-content'), header : draggable.data('header'), clss : draggable.data('clss'), position: 'full'});
						}


						$(window).unbind('mousemove').unbind('mouseup');
					});

				});
			});
		},
		getPosition : function(point, content) {
			var position;

			var offset = $(content).offset();
			if (		point.x - offset.left < content.width() * this.options.threshold.x) {
				position = 'left';
			} else if (	point.x - offset.left > content.width() * (1-this.options.threshold.x)) {
				position = 'right';
			} else if (	point.y - offset.top < content.height() * this.options.threshold.y) {
				position = 'top';
			} else if (	point.y - offset.top > content.height() * (1-this.options.threshold.y)) {
				position = 'bottom';
			} else if (	point.x - offset.left < content.width() / 2) {
				position = 'left';
			} else {
				position = 'right';
			}
			return position;
		},
		contains : function(point) {
			return (cursor.x > self.content.offset().left && cursor.y > self.content.offset().top && cursor.x < self.content.offset().left + width && cursor.y < self.content.offset().top + height);
		},
		addPane : function(attributes) {

			var self = this;
			// var contents = attributes.contents;
			// var header = attributes.header;
			var position = attributes.position;
			// var clss = attributes.clss;
			// var target = attributes.el || this.content;
			var target;
			if (! target) { target = this.content; }

			/*
			whats gonna happen here

			1. if we have no panes: add to panes.

			2. if we have 1 pane, and a full position: add to panes. position on top of previous.

			3. if we have 1 pane, and a side position: add to panes. position correctly. position previous pane correctly.

			4. if we have 2 panes, and a full position: add to panes. position on top of previous.

			5. if we have 2 panes, and a side position that matches one of the previous panes: add ot panes. position on top of that side position that matches.

			6. if we have 2 panes, and a side position that does not match the previous layout: add to panes. flip the previous two to match the new layout; replace the desired pane.

			*/


			// create a new pane
			var pane = new glasswing.views.dynamicPane($.extend({parent : this},attributes));

			// add to our panes stack
			this.pushPane(pane);

			// render onto our container
			target.append(pane.render().$el);

			// position the pane
			self.positionPane({el : pane.$el, position: position});




			if (position !== 'full' && this.panes.length > 1) {
				var conversePane = this.getPane(pane.pane_id-1);
				self.positionPane({pane : conversePane, position : self.getConverse(position)});
			}

			return pane;
		},
		pushPane : function(pane) {
			var self = this;
			self.panes.push(pane);
			pane.pane_id = this.panes.length;
			pane.$el.dblclick(function(e){
				e.preventDefault();
				pane.magnify();
				// self.positionPane({el : pane.$el, position: 'full'});
			});
		},
		getPane : function(pane_id) {
			return this.panes[pane_id - 1];
		},
		removePane : function(pane) {

			pane.$el.remove();
			delete this.panes[pane.pane_id - 1];

			// var newPanes = [];

			// _.each(this.panes,function(p){
			// 	if (p==pane) {
			// 		pane.$el.remove();
			// 		delete p;
			// 	} else {
			// 		p.setPosition('full');
			// 		newPanes.push(p);
			// 	}
			// });
			// this.panes = newPanes;
		},
		getConverse : function(position) {
			switch(position) {
				case 'left' : return 'right'; break;
				case 'right' : return 'left'; break;
				case 'top' : return 'bottom'; break;
				case 'bottom' : return 'top'; break;
			}
			return position;
		},
		positionPane : function(options) {

			_.each(this.panes,function(pane){
				pane.$el.css({zIndex : 10});
			});
			var defaultOptions = function() {return {left: 0, right: 0, top: 0, bottom: 0, height: '100%', width: '100%'};}

			var opts = {};

			if (options.position != 'full') {
				opts[this.getConverse(options.position)] = '50%';
			}

			if (! options.el && options.pane) {
				options.el = options.pane.$el;
				options.pane.setPosition(options.position);
			}

			$(options.el).css({zIndex : 11});
			// console.log(opts);

			(function(attributes){
				if (attributes['right'] || attributes['left']) {	attributes.width = 'auto'; }
				else { 												attributes.height = 'auto'; }
				$(options.el).css($.extend(defaultOptions(),attributes));
			})(opts);

		}

	});
})(jQuery);