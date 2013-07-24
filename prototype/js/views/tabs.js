(function($){
	glasswing.views.tabs = glasswing.views.abstract.extend({
		tagName : 'li',
		className : 'tab',
		template : glasswing.template('tab.html'),
		initialize : function(options) {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.page = options.page;
			this.model = this.page.model;
			this.parent = options.parent;
			this.a = null;
			this.render();
			this.$el.addClass('tab-'+this.page.name.toLowerCase());
		},
		render : function() {
			var self = this;
			// console.log('render page');
			// console.log(this.page);
			this.$el.html(_.template(this.template, {
				url : '#'+this.page.url,
				name : this.page.name
			}));

			this.$el.data('model',this.model);

			this.$a = this.$el.find('a');
			this.$notification = this.$el.find('.notification');

			// this cannot depend on the router to change; we must cpature the event regardless
			this.$a.click(function(e){

				e.preventDefault();
				if (! $(this).parents('li').hasClass('selected')) {
					self.parent.showPage(self.page);
				}



				// self.router.url($(this).attr('href'));

			});
			this.$('.close-tab').click(function(e){
				self.parent.closeTab(self.page);
			});


			$('.search input').hint();


			return this;
		},

		select : function() {
			this.$el.addClass('selected');
			this.$el.removeClass('notify');
			this.$notification.hide();
			return this;
		},
		deselect : function() {
			this.$el.removeClass('selected');
			return this;
		},
		close : function(callback) {
			this.$el.css({height : 0});
			var duration = parseFloat(this.$el.css('transition-duration'));
			var self = this;
			setTimeout(function(){
				callback(self);
			},duration*1000);
		},
		show : function() {

			// console.log(this.$el.find('h2').height());
			// var height = this.$el.height();

			this.$el.css({height : 38});
			//this.$el.css({height: 0}).animate({height : height});
		},
		notify : function(attributes) {
			if (! this.$el.hasClass('selected')) {
				this.$el.addClass('notify');

				this.$notification.attr('alt',attributes.alt);
				this.$notification.show().css({width: 0, height: 0, right: 12, bottom: 12}).animate({width : '18px', height: '18px', right: 3, bottom: 3},
					{
						duration : 400,
						easing : 'easeInOutQuad'
					}
				);
			}

		}

	});

})(jQuery);
