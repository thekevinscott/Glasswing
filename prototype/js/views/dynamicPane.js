(function($){
	glasswing.views.dynamicPane = glasswing.views.abstract.extend({
		className : 'pane',
		initialize : function(attributes) {
			this.content = attributes.content;
			this.header = attributes.header;
			this.parent = attributes.parent;
			this.clss = attributes.clss;
			this.setPosition(attributes.position);
			this.state = 'normal';
		},
		render : function() {
			var self = this;
			this.$el.html('');
			this.$close = $('<div class="close" />');
			this.$magnify = $('<div class="magnify" />');
			this.$header = $('<div class="header">'+this.header+'</div>');
			this.$content = $('<div class="content">'+this.content+'</div>');
			this.$el.addClass(this.clss);
			this.$el.prepend(this.$header);
			this.$el.append(this.$content);

			this.$el.append(this.$close);
			this.$el.append(this.$magnify);

			this.$close.click(function(e){
				e.preventDefault();
				self.parent.removePane(self);
				// self.parent.positionPane({el : self.$el, position: 'full'});
				// self.$el.animate({width: 0, height: 0});
			});
			this.$magnify.click(function(e){
				e.preventDefault();

				if (self.position != 'full') {
					if (self.state=='full') {
						self.state = 'normal';
						self.parent.positionPane({el : self.$el, position: self.position});
					} else {
						self.state = 'full';
						self.parent.positionPane({el : self.$el, position: 'full'});
					}
				}


			});
			return this;

		},
		setPosition : function(pos) {
			console.log(pos);
			if (! pos) { pos = 'full'; }
			this.$el.removeClass(this.position);

			this.position = pos;
			console.log('my position to add: ' + this.position);
			console.log(this.$el[0]);
			// this.parent.positionPane({el : this.$el, position: this.position});
			this.$el.addClass(this.position);
		}
	});
})(jQuery);