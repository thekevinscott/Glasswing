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

        	var self = this;
        	self.button.unbind('click').click(function(){
        		$(self.button).modal({content: self.render().$el, position: 'right'});
        		self.afterRender();
        	});
		},
		render : function() {
			console.log('render');
			var self = this;

			// this.$el.html();
			// this.$el = $('<div class="modal"><div class="arrow"></div><div class="content">'+_.template(this.template, {

			// 	caregivers : this.collection.models

			// })+'</div></div>');

			self.$el.html(_.template(this.template, {

				caregivers : this.collection.models

			}));
			return self;
		},

		afterRender : function() {
			var self = this;

			self.$('.phone, .pager').each(function(){
				var phone = $(this);

				var status = $('<p>Calling... </p><a class="hangup" href="javascript:;">Hangup</a>');
				var hangup_el;
				var parent = phone.parent();
				var number = phone.html().split('-').join('');

				// var phone_html = phone.html();
				parent.addClass("disabled");
				parent.html('Setting up VOIP...');

				glasswing.twilio.addListener('ready',function() {
					// console.log('ready');
					phone.removeClass('disabled');
					parent.html(phone);

				});


				var hangup = function(e) {
					if (e) { e.preventDefault();}
					glasswing.twilio.hangup();
					// var old_html = $('<a href="javascript:;">'+html+'</a>');
					$(parent).html(phone);
					phone.unbind('click').click(placeCall);
				}
				var placeCall = function(e) {

					if (e) { e.preventDefault();}





					glasswing.twilio.call(number);

					$(phone).replaceWith(status);
					hangup_el = parent.find('.hangup');
					hangup_el.click(hangup);
					glasswing.twilio.addListener('connect',function(){
						// console.log('connect');
						// console.log(status);
						parent.find('p').html('Connected ');
					});
					glasswing.twilio.addListener('disconnect',function(){
						// console.log('disconncect');
						$(parent).html(phone);
						phone.unbind('click').click(placeCall);
					});


				}
				phone.unbind('click').click(placeCall);
			});

			return self;
		}
	});
})(jQuery);