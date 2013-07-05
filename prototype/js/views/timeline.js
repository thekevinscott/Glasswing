(function($){
	glasswing.views.timeline = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('timeline/index.html'),
		events : {
		  "click .actions input[type=button]" : "saveProcedure",
		  "mouseover .timeline-container " : "mouseover",
		  "mouseout .timeline-container" : "mouseout"
		},
		initialize : function(attributes) {
			this.parent = attributes.parent;
			this.prior_template = glasswing.template('timeline/prior.html');
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);
        	this.collapsed = false;
        	this.render();
		},
		render : function() {
			var self = this;

			self.$el.html(_.template(self.template, {

			}));
			self.$bar = this.$el.find('.bar');
			self.$priors = this.$el.find('.priors');
			self.$priors_content = this.$priors.find('.content');



			var priors = [

				{date : new Date('2008') },

				{date : new Date('1/2/2009') },
				{date : new Date('2/2/2009') },
				{date : new Date('3/2/2009') },
				{date : new Date('4/2/2009') },
				{date : new Date('5/2/2009') },
				{date : new Date('6/2/2009') },
				{date : new Date('7/2/2009') },
				{date : new Date('8/2/2009') },
				{date : new Date('9/2/2009') },
				{date : new Date('10/2/2009') },
				{date : new Date('11/2/2009') },
				{date : new Date('12/2/2009') },
				{date : new Date('3/2/2010') },
				{date : new Date('6/6/2010') },
				{date : new Date('3/3/2011') },
				{date : new Date('1/2/2012') },
				{date : new Date('2/2/2012') },
				{date : new Date('3/2/2012') },
				{date : new Date('4/2/2012') },
				{date : new Date('5/2/2012') },
				{date : new Date('6/2/2012') },
				{date : new Date('7/2/2012') },
				{date : new Date('8/2/2012') },
				{date : new Date('9/2/2012') },
				{date : new Date('10/2/2012') },
				{date : new Date('2013') }
			];

			// WE NEED PRIORS TO BE IN SORTED DATE.

			var max = (new Date()).getTime();
			var min = max;
			_.each(priors,function(prior){
				if (prior.date.getTime()< min ) {
					min = prior.date.getTime();
				}
			});


			_.each(priors,function(data){
				var prior = new glasswing.views.prior({parent : self, data : data });

				var val = 100-(100 * (data.date.getTime() - min) / (max - min));

				prior.$dot.css({top: val+'%'});
				prior.$dot.mouseover(function(){
					prior.mouseover();
				}).mouseout(function(){
					prior.mouseout();
				});
				self.$bar.append(prior.$dot);

				self.$priors_content.prepend(prior.$el);
			});

			self.delegateEvents();

			return self;
		},
		afterRender : function() {

			var self = this;
			if (self.$priors_content.height() > self.$bar.height()) {

				var bar_size = self.$bar.height() / self.$priors_content.height() * 100;
				self.$slider = self.$el.find('.slider');
				self.$slider.show().css({height: bar_size+'%', top: 0});
			}

			this.$priors.scroll(function(){
				var leftover = (self.$priors_content.height() - self.$priors.height());
				var scroll_position = $(this).scrollTop() / leftover * 100;
				// console.log(scroll_position);
				//self.$slider.css({top : scroll_position - });
				var divider = (leftover / self.$priors_content.height()) * 100; // 20 is the percent different in size
				// console.log(divider);
				// console.log(scroll_position * (divider / 100 ) );
				var top = scroll_position * (divider / 100 ) ;
				self.$slider.css({top : top+'%'});

			});


		},
		mouseover : function() {
			if ( this.collapsed ) {
				this.$priors.stop().animate({width: '300', marginLeft: '0'});
			}
		},
		mouseout : function() {
			if ( this.collapsed ) {
				this.$priors.stop().animate({width: '0', marginLeft: '-10'});
			}
		},
		twoPane : function(prior) {
			var self = this;
			this.parent.twoPane(prior);

			this.$priors.animate({width: '0%', marginLeft: '-10'}, {duration: 400, complete : function(){
				self.collapsed = true;

				self.$priors.css({position: 'absolute'});
			}});
		}

	});

})(jQuery);
