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
		  "click input[type=button]" : "saveExam"
		},
		initialize : function(attributes) {
			this.notification_elements = [];
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	// console.log(attributes);
			this.name = this.model.get('exam_name') + '<span>'+this.model.get('id')+'. '+this.model.get('name')+ '</span>';

			this.url = 'exam/'+this.model.get('id');

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
			var self = this;
			while(this.notification_elements.length > 0) {

				this.notify(this.notification_elements.shift());
			}
			this.timeline.afterRender();

			// this.$('.draggable').draggable({ opacity: 0.7, helper: "clone" });

			var slide_speed = 200;

			this.$('.scanned-documents').each(function(){
				var dropdown = $(this).find('.scanned-documents-dropdown');
				$(this).mouseenter(function(){
					console.log('over');
					dropdown.show();
					// dropdown.stop().slideDown(slide_speed);
				}).mouseleave(function(){
					console.log('out');
					dropdown.hide();
					// dropdown.stop().slideUp(slide_speed);
				});

				$(this).find('.draggable').each(function(){
					$(this).data('dynamic-content','<img src="images/scanned-documents/'+$(this).html()+'" />');
					$(this).data('header','<h2><span>'+$(this).html()+'</span> '+'August 12'+'</h2>');
					$(this).data('clss','scanned-document');

				});
			});





			this.dynamicPane = new glasswing.views.dynamicContainer({el : $('.dynamic-content .container'), draggables : $('.draggable')});

			var prior = this.timeline.getFirstRelevant();
			var prior_el = prior.$el;
			// console.log(prior);
			this.dynamicPane.addPane({
				content : prior_el.data('dynamic-content'),
				header : prior_el.data('header'),
				clss : prior_el.data('clss'),
				callback : function(view){
					prior.afterRender(view);
				}

			});


			this.$('.accordion').accordion({
				slave : $('.dictation')
			});











			// tinymce.init({
			// 	selector: "textarea",
			// 	skin: 'glasswing',
			// 	menubar : false,
			// 	plugins : 'autoresize',

			//     setup : function(editor) {

			//     	var duration = 500;
			//     	var timer;

			//     	var notification_timer;
			//     	var notification_duration = 1500;
			//     	var notification_timer_duration = 2500;
			//     	var hint;
			//     	var options = {
			//     		notification : $('.dictation .autosave')
			//     	}
			//     	var autosave = function() {
			//     		clearTimeout(notification_timer);
			//     		options.notification.show();
			//     		var d = new Date();

			//     		options.notification.html('Autosaved at '+d.getHours()+':'+((d.getMinutes() > 10) ? d.getMinutes() : '0' + d.getMinutes())+' today');
			//     		options.notification.css({opacity :1});
			//     		notification_timer = setTimeout(function(){
			//     			options.notification.stop().animate({opacity : 0.25},{duration : notification_duration});
			//     		},notification_timer_duration);
			//     	};

			//     	options.notification.mouseover(function(){
			//     		options.notification.stop().animate({opacity : 1},{duration : 200});
			//     	}).mouseout(function(){
			//     		options.notification.stop().animate({opacity : 0.25},{duration : notification_duration});
			//     	});

			//     	editor.on('init', function(args) {
			//     		hint = this.getContent();
			//     	});
			//         editor.on('focus', function(args) {
			//         	if (this.getContent() == hint) {
			//         		this.setContent('');
			//         	}
			//         });
			//         editor.on('blur', function(args) {
			//         	if (this.getContent() == '') {
			//         		this.setContent(hint);
			//         	}
			//         });
			//         editor.on('keydown', function(e){
			//     		clearTimeout(timer);
			//     		timer = setTimeout(function(){
			//     			autosave();
			//     		},duration);
			//     	});
			//     }
			// });

			var dictation_textarea = $('.dictation textarea');
			var localKey = 'procedure-'+self.model.get('id')+'-dictation';
			var localDictation = localStorage[localKey];
			if (localDictation) {
				dictation_textarea.val(localDictation);
			}

			var setDraft = function() {

				if ($(this).val() == $(this).data('placeholder')) {
					self.model.set('draft',false);
					localStorage[localKey] = '';
				} else {
					self.model.set('draft',true);
					localStorage[localKey] = $(this).val();
				}

			}
			dictation_textarea.hint().autosave({notification : $('.dictation .autosave')}).keydown(setDraft).blur(setDraft);

		},
		setOptions : function(options) {

		},
		saveExam : function(event) {
			var button = $(event.currentTarget);

			switch(button.val()) {
				case 'Submit Report' :
					this.model.set('status','for-approval');
				break;
				case 'Approve' :
					this.model.set('status','approved');
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
				exam_date : this.model.getDate('end_time'),
				exam_class : this.model.get('exam_class'),
				procedure_name : this.model.get('exam_name'),
				report_status : this.model.get('report_status'),
				clinical_indication : this.model.get('clinical_indication'),
				hospital_name : this.model.get('hospital_name'),
				referring_physician : this.model.get('referring_physician'),
				images : this.model.get('images'),
				status : this.model.get('status')

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
					},1000);

				}
			})

			if (self.model.isFollowing()) {
				self.setFollowingButton(self.$followButton,1);
			}

			self.$left = this.$el.find('.current-report');
			self.$right = this.$el.find('.dynamic-content');

			self.timeline = new glasswing.views.timeline({parent : this, el : this.$el.find('.timeline')});
			// self.afterRender();

			self.caregivers = new glasswing.views.caregivers({
				collection : this.model.get('caregivers'),
				button : this.$('.community-of-caregivers')
			});


			self.$folder = this.$('.folder');
			self.$folder.click(function(){
				self.model.toggle('in-folder');
			});

			this.change('in-folder');

			self.$follow = this.$('.follow');
			self.$follow.click(function(){
				self.model.toggle('following');
			});

			this.change('following');




			return self;
		},
		change : function(key,val) {

			switch(key) {
				case 'in-folder' :
					if (this.model.get(key)) {
						this.$folder.attr('alt','This case is filed under "Teaching".');
					} else {
						this.$folder.attr('alt','Add to folder...');
					}
				break;
				case 'following' :
					if (this.model.get(key)) {
						this.$follow.attr('alt','Unfollow this case.');
					} else {
						this.$follow.attr('alt','Follow this case.');
					}
				break;
			}
			if (this.model.get(key)) {
				this.$el.addClass(key);
			} else {
				this.$el.removeClass(key);
			}

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
