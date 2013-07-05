(function($){
	glasswing.views.timeline = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('timeline/index.html'),
		events : {
		  "click .actions input[type=button]" : "saveProcedure"
		},
		initialize : function(attributes) {

        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);
        	this.render();
		},
		render : function() {
			var self = this;

			self.$el.html(_.template(self.template, {

			}));
			self.$bar = this.$el.find('.bar');




			var priors = [
				{date : new Date('2008') },
				{date : new Date('2009') },
				{date : new Date('2010') },
				{date : new Date('2011') },
				{date : new Date('2012') },
				{date : new Date('2013') }
			];
			var max = (new Date()).getTime();
			var min = max;
			_.each(priors,function(prior){
				if (prior.date.getTime()< min ) {
					min = prior.date.getTime();
				}
			});


			_.each(priors,function(prior){
				var el = $('<div class="prior"></div>');
				console.log('min: '+min);
				console.log('max: '+max);
				console.log('prior: '+prior.date.getTime());
				var val = 100-(100 * (prior.date.getTime() - min) / (max - min));

				el.css({top: val+'%'});
				self.$bar.append(el);
			});


			self.delegateEvents();

			return self;
		}

	});

})(jQuery);
