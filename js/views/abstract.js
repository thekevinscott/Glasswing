(function($){
	glasswing.views.abstract = Backbone.View.extend({
		tagName : 'div',
		initialize : function(attributes) {
			// alert(this.template);


			if (attributes) {
				this.tabManager = attributes.tabManager;
			}


			//if (! this.model) { throw("You must specify a model"); }

			if (this.$el) { this.$el.data('view',this); }

			this.name = 'Default';
			// this.url = '';
			return this;
		},
		setOptions : function(options) {
			// fill me out
		},
		render : function() {
			this.delegateEvents();
			return this;
		},
		getTemplate : function(callback) {
			if (this.template_html) {

				var self = this;
				$.get('js/templates/'+self.template,function(data){
					self.template = data;
					callback();
				});
			}
		}

	});

})(jQuery);
