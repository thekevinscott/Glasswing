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
			self.$barContainer = this.$el.find('.bar-container');
			self.$priors = this.$el.find('.priors');
			self.$priors_content = this.$priors.find('.content');



			var priors = this.parent.model.getPriors();



			var max = (new Date()).getTime();
			var min = max;
			// console.log(priors);
			_.each(priors,function(prior){
				// console.log(prior);
				// console.log(prior.date);
				// console.log(prior.get('date'));
				if (prior.get('date').getTime()< min ) {
					min = prior.get('date').getTime();
				}
			});


			_.each(priors,function(prior){
				var priorView = new glasswing.views.prior({parent : self, model : prior });

				var val = 100-(100 * (prior.get('date').getTime() - min) / (max - min));

				priorView.$dot.css({top: val+'%'});
				priorView.$dot.mouseover(function(){
					priorView.mouseover();
				}).mouseout(function(){
					priorView.mouseout();
				});
				self.$bar.append(priorView.$dot);

				self.$priors_content.prepend(priorView.$el);
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


			var padding = 40;
			var height = 100- (self.$barContainer.offset().top / ($('body').height()-padding) * 100);

			// _.each([,self.$barContainer,self.$priors],function(el){
			self.$el.css({height: height+'%'});
			// });
			// console.log(self.$el);
			self.$el.css({position: 'fixed'});



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
