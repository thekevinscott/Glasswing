(function($){
	glasswing.views.timeline = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('timeline/index.html'),
		events : {
		  "click .actions input[type=button]" : "saveexam",
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
			self.$el.data('view',this);
			self.$bar = this.$el.find('.bar');
			self.$barContainer = this.$el.find('.bar-container');
			self.$priors = this.$el.find('.priors');
			self.$priors_content = this.$priors.find('.content');



			this.priors = this.parent.model.getPriors();



			var max = (new Date()).getTime();
			var min = max;
			// console.log(priors);
			_.each(this.priors,function(prior){
				// console.log(prior);
				// console.log(prior.date);
				// console.log(prior.get('date'));
				if (prior.get('date').getTime()< min ) {
					min = prior.get('date').getTime();
				}
			});
			self.$bar.before('<p class="year-max">'+(new Date(max)).getFullYear()+'</p>');
			self.$bar.after('<p class="year-min">'+(new Date(min)).getFullYear()+'</p>');

			_.each(this.priors,function(prior){
				prior.view = new glasswing.views.prior({parent : self, model : prior });

				var val = 100-(100 * (prior.get('date').getTime() - min) / (max - min));

				prior.view.$dot.css({top: val+'%'});
				self.$bar.append(prior.view.$dot);

				self.$priors_content.prepend(prior.view.$el);


				_.each([prior.view.$el,prior.view.$dot],function(el){
					el.data('dynamic-content',prior.view.getReport());
					el.data('header','<h2><span>'+prior.get('type')+' '+prior.get('body_part')+'</span> '+prior.getDate()+'</h2>');
					el.data('footer','<div class="actions"><a href="javascript:;" class="folder">Add to folder</a><a href="javascript:;" class="community-of-caregivers">Related Caregivers</a><a href="javascript:;" class="hamburger"></a></div>');
					el.data('clss','prior');
					el.data('callback',function(view){
						prior.view.afterRender(view);
					});
				});



			});

			self.delegateEvents();

			return self;
		},
		renderBar : function() {
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
		afterRender : function() {

			var self = this;

			this.renderBar();


			$('.timeline-buttons a').click(function(e){
				e.preventDefault();
				self.switchTimelineView(this);
			});


			// var padding = 40;
			// var height = 100- (self.$barContainer.offset().top / ($('body').height()-padding) * 100);

			// _.each([,self.$barContainer,self.$priors],function(el){
			// self.$el.css({height: height+'%'});
			// });
			// console.log(self.$el);
			// self.$el.css({position: 'fixed'});



		},
		switchTimelineView : function(el) {
			var self = this;
			if ($(el).hasClass('selected')) {return;}
			var bar_priors = $('.timeline .bar .prior:not(.relevant)');
			var prior_priors = $('.timeline .priors .prior:not(.relevant)');
			$('.timeline-buttons a.selected').removeClass('selected');



			switch($(el).attr('class')) {
				case 'relevant-priors' :
					bar_priors.fadeOut();
					prior_priors.slideUp();
				break;
				default :
					bar_priors.fadeIn();
					prior_priors.slideDown();
				break;
			}
			$(el).addClass('selected');
			self.renderBar();
		},
		getFirstRelevant : function() {
			var self = this;
			if (! self.firstRelevant) {
				_.each(self.priors,function(prior) {
					if (! self.firstRelevant || (prior.get('relevant') && prior.getDate() > self.firstRelevant.getDate())) {
						self.firstRelevant = prior;
					}
				});
			}

			return self.firstRelevant.view;
		},
		getFirst : function() {
			return this.priors[0].view;
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
		// twoPane : function(prior) {
		// 	var self = this;
		// 	this.parent.twoPane(prior);

		// 	this.$priors.animate({width: '0%', marginLeft: '-10'}, {duration: 400, complete : function(){
		// 		self.collapsed = true;

		// 		self.$priors.css({position: 'absolute'});
		// 	}});
		// }

	});

})(jQuery);
