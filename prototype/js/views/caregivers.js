(function($){
	glasswing.views.caregivers = glasswing.views.abstract.extend({

		// model : new worklist(),
		className : 'caregivers',
		// template_html : 'report/index.html',
		template : glasswing.template('caregivers.html'),
		events : {
		},
		initialize : function(attributes) {

			this.collection = attributes.collection;
			this.button = attributes.button;

        	// glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;

			// this.$el.html();
			this.$el = $('<div class="modal"><div class="arrow"></div><div class="content">'+_.template(this.template, {

				caregivers : this.collection.models

			})+'</div></div>');



			this.button.unbind('click').click(function(){
				// console.log($(this).position());
				$(this).after(self.$el);
				// self.$coc_modal.hide().slideDown();
				// self.$coc_modal.find('.content').html(self.getCaregivers().$el);
				var width = self.$el.width();
				var left = ($(this).position().left - 30 - width/2 + 80 ) + $(this).width()/2;

				self.$el.css({left: left+'px', top: $(this).position().top + 85});

			});
			return self;
		},
	});
})(jQuery);