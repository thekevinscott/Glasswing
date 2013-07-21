//'lib/text!templates/report/index.html',
(function($){
	$.fn.notify = function(options) {
		options = $.extend({
			notify_appear : 10,
			notify_disappear : 800,
			notification_length : 5000
		},options);
		return $(this).each(function(){
			var el = $(this);

			var fadeOut = function() {
				el.animate({color: 'white'}, options.notify_disappear);
			}
			setTimeout(function() {
				// el = $('.images');
				el.animate({color: '#32a6d6'}, options.notify_appear, function() {
					el.mouseover(function(){
						clearTimeout(timer);
						fadeOut();
					});
					var timer = setTimeout(fadeOut,options.notification_length);
				});
			},200);


		});
	};
	glasswing.views.report = glasswing.views.abstract.extend({
		tagName : 'div',
		className : 'report',
		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('report.html'),
		events : {
		  "click .actions input[type=button]" : "saveProcedure"
		},
		initialize : function(attributes) {
			this.notification_elements = [];
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	// console.log(attributes);
			this.name = this.model.get('procedure_name') + '<span>'+this.model.get('id')+'. '+this.model.get('name')+ '</span>';

			this.url = 'procedure/'+this.model.get('id');

			var self = this;

			setTimeout(function(){
				self.model.set('images',10);
				// console.log('could update images here');

				// console.log(self.model.get('images'));
			},8000);

			// var view = this;

			// two things need to happen.
			// this.model.on('change', function(){

			// }); // attempt to bind to model change event





		},
		addNotification : function(obj) {
			this.notification_elements.push(obj);
		},
		notify : function(obj) {

			var el = this.$('.currents').find('.'+obj.key);
			var span = el.find('span');
			span.html(obj.val);
			el.notify();

		},
		afterRender : function() {
			while(this.notification_elements.length > 0) {

				this.notify(this.notification_elements.shift());
			}
			this.timeline.afterRender();

			// this.$('.draggable').draggable({ opacity: 0.7, helper: "clone" });
			var scanned_documents_dropdown = this.$('.scanned-documents-dropdown');
			var slide_speed = 200;
			this.$('.scanned-documents').mouseover(function(){
				scanned_documents_dropdown.stop().slideDown(slide_speed);
			}).mouseout(function(){
				scanned_documents_dropdown.stop().slideUp(slide_speed);
			})

			this.$('.scanned-documents .draggable').each(function(){
				$(this).data('dynamic-content','<img src="images/scanned-documents/'+$(this).html()+'" />');
				$(this).data('header','<p class="right">August 1, 2013</p><h3>Scanned Document: '+$(this).html()+'</h3>');
				$(this).data('clss','scanned-document');
			});


			this.dynamicPane = new glasswing.views.dynamicContainer({el : $('.dynamic-content .container'), draggables : $('.draggable')});

			var prior = this.timeline.getFirstRelevant().$el;

			this.dynamicPane.addPane({content : prior.data('dynamic-content'), header : prior.data('header'), clss : prior.data('clss')});


			this.$('.accordion').accordion({
				slave : $('.dictation')
			});
			$('.dictation textarea').hint().autosave();


			// tinymce.init({
			// 	selector: "textarea",

			// });

		},
		setOptions : function(options) {

		},
		saveProcedure : function(event) {
			var button = $(event.currentTarget);

			switch(button.val()) {
				case 'Read' :
				break;
				case 'Co-Read' :
				break;
				case 'Approve' :
				break;
			}

			this.tabManager.closeTab(this);



			// how do I access tab manager in this scenario?
		},
		render : function() {
			var self = this;
			self.$el.html(_.template(this.template, {
				id : this.model.get('id'),
				patient_id : this.model.get('patient').get('id'),
				// patient_id : this.model.get('patient').get('patient-id'),
				patient_risks : this.model.get('patient').get('risks'),
				dob : this.model.get('patient').getDob(),
				gender : (this.model.get('patient').get('gender') == 'f') ? 'FEMALE' : 'MALE',

				name : this.model.get('name'),
				priority : this.model.get('priority'),
				procedure_date : this.model.getDate('end_time'),
				procedure_class : this.model.get('procedure_class'),
				procedure_name : this.model.get('procedure_name'),
				report_status : this.model.get('report_status'),
				clinical_indication : this.model.get('clinical_indication'),
				hospital_name : this.model.get('hospital_name'),
				referring_physician : this.model.get('referring_physician'),
				images : this.model.get('images'),

			}));
			self.delegateEvents();

			self.$followButton = this.$el.find('.follow');
			self.$followButton.click(function(e){
				e.preventDefault();
				if ($(this).hasClass('active')) {
					self.model.unfollow();
					$(this).removeClass('active');
					$(this).html('Follow Case');

					// var duration = 60;
					// $(this).stop().animate({width: '35px'},{duration: duration});
					// $(this).find('.check').animate({opacity: 0},{duration: 200, complete : function() {
					// 	this.remove();
					// }});
					// var text = $(this).find('.text');
					// var span = text.find('span');

					// text.stop().animate({
					// 	width : text.data('width')
					// },{duration : 120, complete : function(){
					// 	span.html('Follow');
					// }});

					$(this).parent().find('p.helper').stop().animate({opacity: 0});
				} else {

					self.model.follow();
					var button = this;
					self.setFollowingButton(button);


					var overlay = $('<div class="follow-overlay" />');
					$(overlay).html("<strong>You will be notified when this case is updated.</strong>");
					$('body').append(overlay);
					setTimeout(function(){
						overlay.fadeOut(function(){
							$(this).remove();
						});
					},4000);

					setTimeout(function(){

						var patient = self.model.get('patient');
						self.model.worklist.notifications.addNotification({view : self, message : '<strong>'+patient.get('last')+', '+patient.get('first')+'</strong><br />All images have been uploaded.'});
					},10000);

				}
			})

			if (self.model.isFollowing()) {
				self.setFollowingButton(self.$followButton,1);
			}

			self.$left = this.$el.find('.current-report');
			self.$right = this.$el.find('.dynamic-content');

			self.timeline = new glasswing.views.timeline({parent : this, el : this.$el.find('.timeline')});
			// self.afterRender();

			this.caregivers = new glasswing.views.caregivers({
				collection : this.model.get('caregivers'),
				button : this.$('.community-of-caregivers')
			});
			return self;
		},
		setFollowingButton : function(button,duration) {
			// if (! duration) { duration = 100;}
			$(button).addClass('active');
			$(button).html('Following');

			// var check = $('<div class="check"></div>');
			// $(button).append(check);
			// check.hide();

			// $(button).stop().animate({width: '70px'},{duration: duration});

			// setTimeout(function(){

			// 	check.show().css({opacity: 0, marginTop: 5}).stop().animate({marginTop: 0, opacity: 1},{duration: duration*4, easing: 'easeOutQuad'});

			// 	$(button).parent().find('.helper').stop().animate({opacity: 1},{duration: duration*4});

			// 	var text = $(button).find('.text')
			// 	var span = $(button).find('span');
			// 	var width = span.width();
			// 	text.css({width: width});
			// 	span.html('Following');
			// 	text.data('width',width);
			// 	text.stop().animate({width: span.width()},{duration: duration*2, easing: 'easeInOutQuad'});

			// },duration);
		},
		// twoPane : function(prior) {


		// 	this.$left.addClass('twopane').animate({width: '50%'});
		// 	this.$right.addClass('twopane').animate({width: '50%'});



		// 	this.$right.find('h2').slideUp();
		// 	this.$right.find('.prior-report').html(prior.getReport());



		// 	prior.afterRender();
		// }

	});

})(jQuery);
