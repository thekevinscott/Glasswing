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
			this.name = this.model.get('name');

			this.url = 'procedure/'+this.model.get('id');

			var self = this;

			setTimeout(function(){
				self.model.set('images',10);


				// console.log(self.model.get('images'));
			},1500);

			// var view = this;

			// two things need to happen.
			// this.model.on('change', function(){

			// }); // attempt to bind to model change event





		},
		addNotification : function(obj) {
			this.notification_elements.push(obj);
		},
		notify : function(obj) {

			var el = this.$el.find('.'+obj.key);
			var span = el.find('span');
			span.html(obj.val);
			el.notify();

		},
		afterRender : function() {
			while(this.notification_elements.length > 0) {

				this.notify(this.notification_elements.shift());
			}
			this.timeline.afterRender();



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

			this.$el.html(_.template(this.template, {
				id : this.model.get('id'),
				patient_id : this.model.get('patient').get('patient-id'),
				patient_risks : this.model.get('patient').get('patient-risks'),
				dob : this.model.get('patient').get('dob'),
				gender : this.model.get('patient').get('gender'),
				name : this.model.get('name'),
				priority : this.model.get('priority'),
				procedure_class : this.model.get('procedure_class'),
				procedure_name : this.model.get('procedure_name'),
				report_status : this.model.get('report_status'),
				hospital_name : this.model.get('hospital_name'),
				referring_physician : this.model.get('referring_physician'),
				images : this.model.get('images'),

			}));
			this.delegateEvents();

			this.$followButton = this.$el.find('.follow-button');
			this.$followButton.click(function(e){
				e.preventDefault();
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');


					$(this).stop().animate({width: '35px'},{duration: 60});
					$(this).find('.check').remove();
					$(this).find('span').html('Follow');
					$(this).parent().find('p.helper').stop().animate({opacity: 0});
				} else {
					var button = this;
					$(button).addClass('active');

					var check = $('<div class="check"></div>');
					$(button).append(check);
					check.hide();

					$(button).stop().animate({width: '70px'},{duration: 100});

					setTimeout(function(){

						check.show().css({opacity: 0, marginTop: 5}).stop().animate({marginTop: 0, opacity: 1},{easing: 'easeOutQuad'});

						$(button).parent().find('.helper').stop().animate({opacity: 1});
						$(button).find('span').html('Following');
					},100);

				}
			})
			this.$left = this.$el.find('.left');
			this.$right = this.$el.find('.right');
			this.timeline = new glasswing.views.timeline({parent : this, el : this.$el.find('.timeline')});
			this.afterRender();

			return this;
		},
		twoPane : function(prior) {

			this.$left.animate({width: '50%'});
			this.$right.animate({width: '50%'});


			this.$right.find('.prior-report').html(prior.getReport());
			prior.afterRender();
		}

	});

})(jQuery);
