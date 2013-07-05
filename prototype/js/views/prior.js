(function($){
	glasswing.views.prior = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',
		className : "prior",
		template : glasswing.template('timeline/prior.html'),
		events : {
		  "mouseover" : "mouseover",
		  "mouseout" : "mouseout",
		  "click" : "click"
		},
		initialize : function(attributes) {
			this.parent = attributes.parent;
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
			this.$el.addClass('hover');
			this.$dot.addClass('hover');
			// this.parent.mouseover();
		},
		mouseout : function() {
			this.$el.removeClass('hover');
			this.$dot.removeClass('hover');
			// this.parent.mouseout();
		},
		click : function() {
			this.parent.twoPane(this);
		},
		getReport : function() {
			if (! this.$report) {
				this.$report = _.template(glasswing.template('timeline/prior-report.html', {

				}));
				this.$report = 'ssdf';

			};
			return this.$report;
		}
	});
})(jQuery);