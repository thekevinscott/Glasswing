(function($){
	glasswing.views.prior = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',
		className : "prior",
		template : glasswing.template('timeline/prior.html'),
		events : {
		  "mouseover" : "mouseover",
		  "mouseout" : "mouseout",
		  "click" : "click",
		  "click .coc" : "coc"
		},
		initialize : function(attributes) {
			this.parent = attributes.parent;
			// this.data = attributes.data;
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;
			self.$dot = $('<div class="prior"></div>');
			self.$el.html(_.template(self.template, {
				date : this.model.getDate(),
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
			var size = 16;
			this.$dot.stop().css({zIndex: 15}).animate({width: size, height: size, marginTop: (-1*size/4*3), marginLeft: (-1*size/2)},{duration: 200, easing: 'easeOutBounce'});
			// this.parent.mouseover();
		},
		mouseout : function() {
			this.$el.removeClass('hover');
			this.$dot.removeClass('hover');
			this.$dot.stop().css({zIndex:10}).animate({width: 6, height: 6, marginTop: -6, marginLeft: -3},{duration: 200, easing: 'easeOutBounce'});
			// this.parent.mouseout();
		},
		click : function() {
			this.parent.twoPane(this);
		},
		getReport : function() {
			if (! this.$report) {
				this.$report = _.template(glasswing.template('timeline/prior-report.html', {

				}));

			};
			return this.$report;
		},
		afterRender : function() {
			var self = this;
			$(this.$report).find('.coc').click(function(){
				var modal = $('<div class="modal"><div class="arrow"></div><div class="content"></div></div>');
				// console.log($(this).position());
				$(this).after(modal);
				modal.find('.content').html(self.getCaregivers().$el);
				modal.css({left: $(this).position().left+10, top: $(this).position().top + 85, width: '200px', height: '200px'});
			});
		},
		getCaregivers : function() {
			if (! this.caregivers) { this.caregivers = new glasswing.views.caregivers(this); }
			return this.caregivers;
		}
	});
})(jQuery);