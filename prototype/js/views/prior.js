(function($){
	glasswing.views.prior = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',
		className : "prior",
		template : glasswing.template('timeline/prior.html'),
		events : {
		  "mouseover" : "mouseover",
		  "mouseout" : "mouseout",
		},
		initialize : function(attributes) {
			this.data = attributes.data;
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;
			self.$dot = $('<div class="prior"></div>');
			self.$el.html(_.template(self.template, {
				date : this.data.date.getMonth()+'/'+this.data.date.getDate()+'/'+this.data.date.getFullYear(),
				procedure_name : 'Family Medicine'
			}));
			// console.log(this.$dot);
			// self.delegateEvents();
			// this.$dot.mouseover(this.mouseover).mouseout(this.mouseout);

			return self;
		},
		mouseover :function() {
			console.log(this.$dot);
			this.$el.addClass('hover');
			this.$dot.addClass('hover');

		},
		mouseout : function() {
			this.$el.removeClass('hover');
			this.$dot.removeClass('hover');

		}


	});

})(jQuery);
