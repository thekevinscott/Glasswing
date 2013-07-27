(function($){
	$.fn.countUp = function() {
		return $(this).each(function(){
			var div = $(this);
			var span = div.find('span');
			var timestamp = span.attr('rel');
			// var end_time = new Date(timestamp);

			var interval = 200;

			// var pluralize(num, label) {
			// 	return (num==1) ? label : label + 's';
			// }


			var count = function() {
				var difference = Math.ceil(((new Date()).getTime() - timestamp) / 1000);
				if (difference < 60) {
					span.html(difference+'"');

				} else if (difference < 60*60) {
					var minutes = Math.floor(difference / 60);
					span.html(minutes + '\' ' + (difference%60)+'"');
				}

				setTimeout(count,interval);
			}

			count();
		});
	}
	glasswing.views.exam = glasswing.views.abstract.extend({
		events : {
			"click" : "click",
			// "mouseover *" : "mouseover",
			// "mouseout *" : "mouseout",
		},

		initialize : function(attributes) {

			this.model = attributes.model;
			this.layout = 'grid';
			this.name = this.model.get('name');


			//this.render(true);
		},
		render : function() {
			var self = this;
			// if (force || this.model.hasChanged()) {
			// 	// we should cache rendering and only return it on damage to the model

			var opts = {
				id : this.model.get('id'),
				accession_id : this.model.get('accession_id'),
				attachments : this.model.get('attachments'),
				dob : this.model.get('patient').getDate('dob'),
				first : this.model.get('patient').get('first'),
				last : this.model.get('patient').get('last'),
				gender : (this.model.get('patient').get('gender') == 'f') ? 'FEMALE' : 'MALE',
				patient_id : this.model.get('patient').get('id'),
				patient_risks : this.model.get('patient').get('risks'),
				exam_name : this.model.getName(),
				priority : this.model.get('priority'),
				exam_class : this.model.get('exam_class'),
				report_status : this.model.get('report_status'),
				exam_status : this.model.get('exam_status'),
				referring_physician : this.model.get('referring_physician'),
				referring_location : this.model.get('referring_location'),
				clinical_indication : this.model.get('clinical_indication'),
				end_time : this.model.getDateAndTime('end_time'),
				end_timestamp : this.model.get('end_time').getTime(),
				stat : ( (this.model.isStat()) ? 'stat' : null  ),
				locked : this.model.get('locked'),
				ready : this.model.get('ready'),
				draft : this.model.get('draft')
			};

			this['$table'] = $(_.template(glasswing.template('worklist/row'),opts));
			this['$table'].data('view',this);
			this['$card'] = $(_.template(glasswing.template('worklist/card'),opts));
			this['$card'].data('view',this);
			this['$grid'] = $(_.template(glasswing.template('worklist/grid-row'),opts));
			this['$grid'].data('view',this);


			this.$el = this['$'+this.layout];

			this.$el.data('view',this);

			this.delegateEvents();

			this.$('.stat').countUp();

			this.$('.queue').click(function(e){
				e.stopPropagation();
				self.model.toggle('in-queue');
			});
			this.change('in-queue');

			return this;
		},
		change : function(key) {

			switch(key) {
				case 'in-queue' :

					if (this.model.get(key)) {
						this.$el.addClass(key);
						this.$('.queue').attr('alt','You have queued this case.<br />Go to your Queue Folder to access all <br />queued cases. ');
					} else {
						this.$el.removeClass(key);
						this.$('.queue').attr('alt','Add this case to my queue.');
					}
				break;
				case 'locked' :
					if (this.model.get(key)) {
						this.$('.locked').addClass('on');
						this.$('.locked').html(this.model.get(key));
						this.$('.locked').attr('alt',this.model.get(key)+' is reading this case');
					} else {
						this.$('.locked').removeClass('on');
						this.$('.locked').html('Nobody is reporting');
						this.$('.locked').attr('alt','Nobody is reporting');
					}
				break;
			}

		},
		click : function() {

			// var model = $(event.currentTarget).data('model');

			//this.layout = 'report';
			//if (! this.report) { this.report = new glasswing.views.report(this.model); }

			this.model.worklist.tabManager.showPage(this.getReport());

		},
		setLayout : function(layout) {
			this.layout = layout;
		},
		getReport : function() {
			if (! this.report) {
				this.report = new glasswing.views.report({model: this.model});
			}
			return this.report;
		},
		mouseover : function(event) {
			var el = $(event.currentTarget);
			if (el.attr('class')) {
				var clss = el.attr('class').replace('highlight','').trim();
				// console.log('add to: ' + clss);
				$('.'+clss).addClass('callout');
			}

		},
		mouseout : function() {
			$('.callout').removeClass('callout');
			// var el = $(event.currentTarget);
			// var clss = el.attr('class').replace('highlight','').trim();
			// console.log('remove from: ' + clss);
			// $('.'+clss).removeClass('highlight');
		}
		// getTemplate : function(callback) {
		// 	if (this.template_html) {

		// 		var self = this;
		// 		$.get('js/templates/'+self.template,function(data){
		// 			self.template = data;
		// 			callback();
		// 		});
		// 	}
		// }


	});

})(jQuery);
