//'lib/text!templates/guide/titlePage.html',

(function($){
	glasswing.views.guide = glasswing.views.abstract.extend({
		el : '#guide',
		tagName : 'div',
		animation : {
			page : 1000
		},
		// model : new worklist(),
		// template : 'guide/titlePage.html',
		// template : $('#guide-titlePage').html(),
		template : glasswing.template('titlePage.html'),

		events : {
		  "click #titlePage .button" : "click"
		},
		active : true,
		current_view : null,

		initialize : function(attributes) {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			// you scratch my back, I scratch yours
			this.router = attributes.router;

			this.attributes = attributes;

			// we create the view on load
			this.render();



		},
		render : function() {
			this.$el.append($(_.template(this.template, {})));


			this.sidebar = new glasswing.views.sidebar({
				el : this.$el.find('#sidebar'),
				parent : this,
				chapters : this.attributes.chapters,
				arguments : arguments
			});


			this.$titlePage = this.$el.find('#titlePage');
			this.$glasswing = $('#glasswing');
			//this.$sidebar = this.$el.find('#sidebar');


		},
		click : function(event) {
			switch($(event.currentTarget).attr('val')) {
				case 'walkthrough' :
					this.begin();

				break;
				default :
					window.location = 'prototype';
				break;
			}
			// this.setActive( (   $(event.currentTarget).attr('val')  == 'walkthrough') ? true : false );
		},

		// this is the action corresponding to the title page.
		// handles the positioning, and if not the initial view, the animation
		home : function() {



			if (! this.router.initial_route) {
				// use a map function here
				this.$titlePage.animate({left: '0%'},this.animation.page,'easeInOutQuad');
				this.sidebar.$el.animate({left: '100%'},this.animation.page,'easeInOutQuad');
				this.$glasswing.animate({left: '100%'}, this.animation.page, 'easeInOutQuad');
			} else {

				this.$titlePage.css({left: '0%'});
				this.sidebar.$el.css({left: '100%'});
				this.$glasswing.css({left: '100%'});
			}

			this.router.navigate('home');
		},
		// this is the action corresponding to the rest of the app. i.e., not the title page.
		// handles the positioning, and if not the initial view, the animation
		begin : function(arguments) {

			if (! this.router.initial_route) {

				this.$titlePage.animate({left: '-100%'},this.animation.page,'easeInOutQuad');
				this.sidebar.$el.animate({left: '0%'},this.animation.page,'easeInOutQuad');


				this.$glasswing.animate({left: '0%', marginLeft: this.sidebar.$el.data('width')+'%', width: (100-this.sidebar.$el.data('width'))+'%'}, this.animation.page, 'easeInOutQuad');

			} else {

				this.$titlePage.css({left: '-100%'});
				this.sidebar.$el.css({left: '0%'});
				this.$glasswing.css({left: '0%'});


				this.$glasswing.css({marginLeft: this.sidebar.$el.data('width')+'%', width: (100-this.sidebar.$el.data('width'))+'%'});

			}


			console.log('there an issue here. if you click the button, it wont automatically open up the tab. because when it calls route, the url hasnt been set yet');
			console.log('route');
			this.sidebar.route(arguments);
		},
		isActive : function() { return this.active; },
		// sets whether the guide is active or not.
		// the event will propagate to sidebar, which is, after all, the thing that's mostly changing.
		setActive : function(is_active) {
			this.active = is_active;
		},
		activate : function() {
			alert('activate!');
			if (! this.router.initial_route) {
				this.$glasswing.animate({left: '0%', marginLeft: this.sidebar.$el.data('width')+'%', width: (100-this.sidebar.$el.data('width'))+'%'}, this.animation.page, 'easeInOutQuad');
			} else{
				this.$glasswing.animate({left: '0%', marginLeft: this.sidebar.$el.data('width')+'%', width: (100-this.sidebar.$el.data('width'))+'%'});
			}
			this.sidebar.open();
		},
		deactivate : function() {
			// alert('deactivate!');
			if (! this.router.initial_route) {
				this.$glasswing.stop().animate({left: '0%', marginLeft: 0, width: '100%'}, this.animation.page, 'easeInOutQuad');
			} else{

				this.$glasswing.css({left: '0%', marginLeft: 0, width: '100%'});
			}
			this.sidebar.close();
		},
		navigate : function(path, options) {

			this.router.navigate(path,options);
		}

	});

})(jQuery);
