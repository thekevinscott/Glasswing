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
			self.$el.data('url',self.$el.find('h1').html().toURL());


			//console.log(self.model.panes.each);
			_.each(self.model.panes,function(section){
				section.view = new glasswing.views.section(section,self);


				self.$sections.append(section.view.$el);



				self.setupSection(section.view.$el);
			});



			return this;
		},
		setupSection : function(view_el) {


			var title = $(view_el).find('h2').html().toURL();
			$(view_el).data('url',this.$el.data('url')+'/'+title);

			this.panes[title] = view_el;

		},
		play : function(file) {
			//
//			self.audio = self.$el.find('audio');

			console.log(this.parent);
			console.log(this.parent.audio);
			this.parent.audio.attr('src','audio/'+file+'.mp3');
			this.parent.audio[0].play();

			var self = this;
			this.parent.audio.audio({
				// 1.5 : function() {
				// 	self.$el.find('.pane:first').open();
				// },
				1.0 : function() {
					var tr = $p('table tbody tr:first');
					//var view = $p('data',tr,'view')
					tr.highlight();
					tr.click(function(e){
						$(this).unbind('click');
						self.nextSection();
						$.dehighlight();
					});
				}
			});

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
		}

	});

})(jQuery);