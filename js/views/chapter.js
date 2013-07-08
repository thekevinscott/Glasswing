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
		play : function(file) {
			var self = this;
			//
//			self.audio = self.$el.find('audio');
			// console.log('file: ' + file);
			self.parent.$audio.attr('src','audio/'+self.title+'/'+file+'.mp3');
			if (! self.parent.parent.isActive()) {
				self.parent.parent.callbacks.push(function(){
					self.parent.$audio[0].play();
				});

			}




			var config = glasswing.config.chapters.chapters[this.title];

			// console.log(JSON.parse(this.model.events));
			switch(this.title) {
				case 'tabs' :
				var events = {
					9 : function(){
						var tr = $p('table tbody tr:first');
						//var view = $p('data',tr,'view')
						tr.highlight({
							content: "Click the highlighted procedure"
						});
						tr.click(function(e){
							$(this).unbind('click');
							self.nextSection();
							$.dehighlight();
						});
					}
				};
			}

			if (events) {


				this.parent.$audio.audio(events);
			}

			/*
			(function() {}
		var tr = $p('table tbody tr:first');
		//var view = $p('data',tr,'view')
		tr.highlight({
			content: "Click the highlighted procedure"
		});
		tr.click(function(e){
			$(this).unbind('click');
			self.nextSection();
			$.dehighlight();
		});
	})
*/
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