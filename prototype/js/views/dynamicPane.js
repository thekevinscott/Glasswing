(function($){
	glasswing.views.dynamicPane = glasswing.views.abstract.extend({
		className : 'pane',
		initialize : function(attributes) {
			this.content = attributes.content;
			this.header = attributes.header;
			this.footer = attributes.footer;
			this.parent = attributes.parent;
			this.clss = attributes.clss;

			this.setPosition(attributes.position);
			this.callback = attributes.callback;
			this.state = 'normal';
		},
		render : function() {
			var self = this;
			this.$el.html('');
			this.$close = $('<div class="close" />');
			this.$magnify = $('<div class="magnify" />');
			this.$header = $('<div class="header">'+this.header+'</div>');
			this.$content = $('<div class="content">'+this.content+'</div>');
			if (this.footer) { this.$footer = $('<div class="footer">'+this.footer+'</div>'); }
			this.$el.addClass(this.clss);
			this.$el.prepend(this.$header);
			this.$el.append(this.$content);
			if (this.$footer) { this.$el.append(this.$footer); }

			this.$header.append(this.$close);
			this.$header.append(this.$magnify);

			this.$close.click(function(e){
				e.preventDefault();
				self.parent.removePane(self);
				// self.parent.positionPane({el : self.$el, position: 'full'});
				// self.$el.animate({width: 0, height: 0});
			});
			this.$magnify.click(function(e){
				self.magnify(e);
			});
			if (this.callback) { this.callback(this); }
			return this;

		},
		magnify : function(e) {
			if (e) { e.preventDefault(); }
			var self = this;
			if (self.position != 'full') {
				if (self.state=='full') {
					self.state = 'normal';
					self.parent.positionPane({el : self.$el, position: self.position});
					this.$el.addClass(this.position).removeClass('magnified');
				} else {
					self.state = 'full';
					self.parent.positionPane({el : self.$el, position: 'full'});
					this.$el.removeClass(this.position).addClass('magnified');
				}
			}
		},
		setPosition : function(pos) {

			if (! pos) { pos = 'full'; }
			this.$el.removeClass(this.position);

			this.position = pos;
			// this.parent.positionPane({el : this.$el, position: this.position});
			this.$el.addClass(this.position);
		}
	});
})(jQuery);