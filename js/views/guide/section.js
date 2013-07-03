define([
	'underscore',
	'backbone',
	'jquery',

	'easing',
	'lib/text!templates/guide/section.html',
], function(_, Backbone, $, easing, template) {
	return Backbone.View.extend({

		template : template,
		// model : new worklist(),

		events : {
		  "click" : "open"
		},

		initialize : function(data, parent) {
			this.$el.addClass('pane').addClass('inactive').addClass('raised');

			this.data = data;
			this.parent = parent;

			this.render();

			// this.close();
		},
		render : function() {

			this.$el.html(_.template(this.template,this.data));
			this.title = this.$el.find('h2').html().toURL();
			this.$el.attr('id',this.title);

			// this.$el.data('url',this.$el.find('h2').html().toURL());
			this.$el.data('view',this);
			return this;
		},
		open :function() {
			if ($('.pane.active').length) {
				$('.pane.active').data('view').close();
			}

			this.$el.addClass('active');
			this.$el.find('p').stop().slideDown();

			// todo: remove this if statement, should always have a parent
			if (this.parent) { this.parent.url(this.$el.data('url')); }
			return this;
		},
		close : function() {
			this.$el.removeClass('active');
			this.$el.find('p').stop().slideUp();
			return this;
		},
		click : function(callback) {
			this.$el.click(callback);
		}

	});
});
