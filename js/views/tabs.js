define([
	'underscore',
	'backbone',

], function(_, Backbone) {

	return Backbone.View.extend({
		tagName : 'li',
		className : 'tab',
		initialize : function(options) {
			// console.log(options);
			this.page = options.page;
			this.a = null;

		},
		render : function() {
			// console.log('render page');
			// console.log(this.page);
			this.a = $("<a />");
			this.a.attr('href','#'+this.page.url);
			this.a.html(this.page.name);
			this.$el.html(this.a);



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
});
