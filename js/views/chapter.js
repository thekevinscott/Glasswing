(function($){
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
			this.$el.attr('id','chapter-'+this.model.title.toURL())
			this.panes = {};
			this.render();
		},

		render : function() {
			var self = this;
			//var chapter = new chapterView(this.chapters[key]);


			self.$el.html(_.template(this.template,this.model));



			self.$sections = self.$el.find('.sections');
			//this.$el.append(chapter.$el);
			this.title = self.$el.find('h1').html().toURL();
			self.$el.data('url',this.title);


			//console.log(self.model.panes.each);
			_.each(self.model.panes,function(section){
				section.view = new glasswing.views.section(section,self);


				self.$sections.append(section.view.$el);



				self.setupSection(section.view.$el);
			});



			return this;
		},
		setupSection : function(view_el) {


			var section_title = $(view_el).find('h2').html().toURL();
			$(view_el).data('url',this.$el.data('url')+'/'+section_title);

			this.panes[section_title] = view_el;

		},
		play : function(section_title) {
			var self = this;


			self.parent.$audio.attr('src','audio/'+self.title+'/'+section_title+'.mp3');



			self.parent.parent.addCallback(function(){
				self.parent.$audio[0].play();
			});


			var config = glasswing.config.chapters.chapters[this.title];

			$.dehighlight();


			var events = this.getEvents(this.title, section_title);

			// if (events.before !== undefined && typeOf(events.before)=='function') {
			// 	events.before();
			// 	delete events.before;
			// }
			this.parent.$audio.audio(events,self);
		},
		nextSection : function() {

			var section_index = this.$sections.find('.active').index();
			var panes = this.$sections.find('.pane');
			if (section_index+1 < panes.length) {
				$(panes[section_index+1]).data('view').open();
			}
		},
		navigate : function(path,options) {
			// this.parent.navigate(this.$el.data('url')+'/'+path,options);
			this.parent.navigate(path,options);
		},
		getEvents : function(title, section_title) {
			console.log(this.title+': ' + section_title);

			var chapters = glasswing.config.chapters.chapters;
			// console.log(chapters[this.title].events);
			if (chapters[this.title] && chapters[this.title].events && chapters[this.title].events[section_title]) {

				return chapters[this.title].events[section_title];
			} else {
				return {};
			}
		}

	});

})(jQuery);