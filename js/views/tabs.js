(function($){
	glasswing.views.tabs = glasswing.views.abstract.extend({
		tagName : 'li',
		className : 'tab',

		initialize : function(options) {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.page = options.page;
			this.model = this.page.model;
			this.parent = options.parent;
			this.a = null;

		},
		render : function() {
			var self = this;
			// console.log('render page');
			// console.log(this.page);
			this.a = $("<a />");
			this.a.attr('href','#'+this.page.url);

			this.a.html(this.page.name);


			this.$el.html(this.a);

			this.$el.data('model',this.model);

			// this cannot depend on the router to change; we must cpature the event regardless
			this.a.click(function(e){
				e.preventDefault();
				self.parent.showPage($(this).parent().data('model'));
				// self.router.url($(this).attr('href'));

			});

			return this;
		},

		select : function() {
			this.$el.addClass('selected');
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
			var height = this.$el.height();

			this.$el.css({height : height});
			//this.$el.css({height: 0}).animate({height : height});
		}

	});

})(jQuery);
