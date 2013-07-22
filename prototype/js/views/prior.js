(function($){
	glasswing.views.prior = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',
		className : "prior draggable",
		template : glasswing.template('timeline/prior.html'),
		events : {
		  // "mouseover" : "mouseover",
		  // "mouseout" : "mouseout",
		  // "click" : "click",
		  "click .coc" : "coc"
		},
		initialize : function(attributes) {

			this.model = attributes.model;
			this.parent = attributes.parent;
			// this.data = attributes.data;
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;
			self.$dot = $('<div class="prior draggable"></div>');
			self.$el.html(_.template(self.template, {
				date : this.model.getDate(),
				exam_name : this.model.get('type'),
				impression : this.model.get('impression'),
			}));
			if (this.model.get('relevant')) {
				self.$el.addClass('relevant');
				self.$dot.addClass('relevant');
			}

			// console.log(this.$dot);
			// self.delegateEvents();
			// this.$dot.mouseover(this.mouseover).mouseout(this.mouseout);

			return self;
		},
		// mouseover :function() {
		// 	this.$el.addClass('hover');
		// 	this.$dot.addClass('hover');
		// 	var size = 16;
		// 	this.$dot.stop().css({zIndex: 15}).animate({width: size, height: size},{duration: 200, easing: 'easeOutBounce'});
		// 	// this.parent.mouseover();
		// },
		// mouseout : function() {
		// 	var size = 8;
		// 	this.$el.removeClass('hover');
		// 	this.$dot.removeClass('hover');
		// 	this.$dot.stop().css({zIndex:10}).animate({width: size, height: size},{duration: 200, easing: 'easeOutBounce'});
		// 	// this.parent.mouseout();
		// },
		click : function() {
			this.parent.twoPane(this);
		},
		getReport : function() {
			if (! this.$report) {

				var report_template = glasswing.template('timeline/prior-report.html');
				this.$report = _.template(report_template, {
					indication : this.model.get('indication'),
					exam : this.model.get('exam'),
					findings : this.model.get('findings'),
					impression : this.model.get('impression')
				});


			};
			// console.log(this.$report());

			return this.$report;
		},
		afterRender : function(view) {
			var self = this;

			// $(self.$report).find('.show-more').click(function(e){
			// 	$(self.$report).find('.excerpt').hide();
			// 	$(self.$report).find('.report').show();
			// 	$(this).hide();
			// })

			self.caregivers = new glasswing.views.caregivers({
				collection : self.model.get('caregivers'),
				button : view.$('.community-of-caregivers')
			});

		},

	});
})(jQuery);