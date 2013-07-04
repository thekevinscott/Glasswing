(function($){
	$.fn.audio = function(events){
		return $(this).each(function(){
			var audio = $(this)[0];
			var currentTime = audio.currentTime;
			var start_seek = null;

			// audiojs.events.ready(function() {
			//     var as = audiojs.createAll();
			// });

			// this is fucked on chrome
			// this.addEventListener('progress',function(){
			// 	console.log(this);
			// });


			var getCurrentTime = function() {
				for (var time in events) {
					time = parseFloat(time);

					if (currentTime < time && audio.currentTime > time && typeof events[time] == 'function') {
						events[time]();
					}
					if (time > audio.currentTime) { break; }
				}


				currentTime = audio.currentTime;

				setTimeout(getCurrentTime,100);
			}
			getCurrentTime();


			this.addEventListener('seeked',function(e){
				start_seek = audio.currentTime;
				console.log('seeked');
				console.log(e);
			});
			this.addEventListener('seeking',function(e){

				console.log('seeking');
				console.log(e);
			});

		});
	}
	glasswing.views.chapter = glasswing.views.abstract.extend({


		// model : new worklist(),
		// template_html : 'guide/chapter.html',
		className : 'chapter',
		template : glasswing.template('chapter.html'),
		events : {
		  "click #introduction .button" : "click"
		},
		bookmark : null,

		initialize : function(options) {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.parent = options.parent;




			this.model = new glasswing.models.chapter(options.data);
			this.$el.attr('id','chapter-'+this.model.title)
			this.panes = {};
			this.render();
		},

		render : function() {
			var self = this;
			//var chapter = new chapterView(this.chapters[key]);


			self.$el.html(_.template(this.template,this.model));



			self.$sections = self.$el.find('.sections');
			//this.$el.append(chapter.$el);
			self.$el.data('url',self.$el.find('h1').html().toURL());


			//console.log(self.model.panes.each);
			_.each(self.model.panes,function(section){
				section.view = new glasswing.views.section(section,self);


				self.$sections.append(section.view.$el);



				self.setupSection(section.view.$el);
			});

			self.$el.find('audio').audio({
				// 1.5 : function() {
				// 	self.$el.find('.pane:first').open();
				// },
				// 13.8 : function() {
				// 	self.addOverlay($('table tr:first'));
				// }
			});


			return this;
		},
		setupSection : function(view_el) {


			var title = $(view_el).find('h2').html().toURL();
			$(view_el).data('url',this.$el.data('url')+'/'+title);

			this.panes[title] = view_el;

		},
		navigate : function(path,options) {
			// this.parent.navigate(this.$el.data('url')+'/'+path,options);
			this.parent.navigate(path,options);
		}

	});

})(jQuery);