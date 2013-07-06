/*
'lib/text!templates/worklist/table.html',

	'lib/text!templates/worklist/cards.html',
	'lib/text!templates/worklist/row.html',
	'lib/text!templates/worklist/card.html',
	*/
(function($){

	$.fn.select = function(){
		return $(this).each(function(){
			$(this).addClass('selected');
		});
	};
	$.fn.deselect = function(){
		return $(this).each(function(){
			$(this).removeClass('selected');
		});
	};
	glasswing.views.worklist = glasswing.views.abstract.extend({
		tagName : 'div',
		className : 'worklist',
		// model : new worklist(),
		template : glasswing.template('worklist/index'),
		events : {
		  // "click tbody tr" : "openProcedure",
		  // "click .cards .card" : "openProcedure",
		  "click input[type=button]" : "setLayout"
		},
		current_layout : 'table',
		buttons : {},
		selected_button : null,
		// changeLayout : function(event) {

		// },

		initialize : function(attributes) {
			// console.log("*** initialize our worklist");
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.procedures = new glasswing.collections.procedures();
			this.procedures.view = this;

			// this.tabManager = attributes.tabManager;
			// console.log('init the worklist');

			this.name = 'Worklist';
			this.url = 'worklist';


			this.templates = {
				card : { template : glasswing.template('worklist/cards'), selector : '.cards'},
				table : { template : glasswing.template('worklist/table'), selector : 'tbody'}
			};
			this.setLayout(this.current_layout);

			// alert('1');
			// console.log(this.templates);


		},

		render : function() {
			var self = this;

			// alert('render');

			self.$el.html(_.template(self.template, {}));
			self.$list = self.$el.find('.list');


			var current_template = self.templates[self.current_layout];

			// console.log(self.current_layout);
			// console.log(current_template.template);
			self.$list.html(_.template(current_template.template, {}));
			// self.$worklist.html('worklist');


			self.$target = this.$el.find(current_template.selector);


			_.each(self.procedures.models,function(procedure, index){

				procedure.view.setLayout(self.current_layout);


				self.$target.append(procedure.view.render().$el);


			});
			this.delegateEvents();


			this.$el.find('input[type=button]').each(function(){

				self.buttons[$(this).val().toLowerCase()] = $(this);
			});


			switch(self.current_layout) {
				case 'table' : self.attachTableEvents(); break;
			}


			return this;
		},
		attachTableEvents : function() {
			var self = this;
			var isDragging = false;

			// console.log(this.$list.find('thead td'));
			self.$list.find('thead td')
			.mouseover(function(){
				console.log('mouseover');
				var td_index = $(this).index();
				var input = $(self.$list.find('thead tr.search-fields .input')[td_index]);
				input.stop().animate({marginTop: -20, height: 20},{duration: 300, easing:'easeOutBounce'});
			})
			.mouseout(function(){
				console.log('mouseover');
				var td_index = $(this).index();
				var input = $(self.$list.find('thead tr.search-fields .input')[td_index]);
				if (! input.find('input').val()) {
					input.stop().animate({marginTop: 0, height: 0},{duration: 500, easing:'easeInOutQuad'});
				}


			})
			.mousedown(function() {
				console.log('mousedown');
			    $(window).mousemove(function() {
			        isDragging = true;
			        $(window).unbind("mousemove");

			    });
			})
			.mouseup(function(event) {
				// console.log('mouseup');
			    var wasDragging = isDragging;
			    isDragging = false;
			    $(window).unbind("mousemove");
			    if (!wasDragging) { //was clicking
			    	self.sort($(event.currentTarget));
			    }
			});


		},
		afterRender : function() {
			var self = this;
			switch(this.current_layout) {
				case 'table' :
					var inputs = self.$list.find('.search-fields input');
					// inputs.each(function(){
					// 	var td = $(this).parents('td');
					// 	var td_index = td.index();
					// 	$(this).css({
					// 		// width: $(this).parents('td').width(),
					// 		position: 'absolute'
					// 	});
					// 	$(this).data('td_index',td_index);
					// });
					// inputs.each(function(){
					// 	var td = $(self.$list.find('tbody tr:first td')[$(this).data('td_index')]);
					// 	var position = td.position();
					// 	var width = td.width();
					// 	$(this).css({
					// 		top: position.top,
					// 		left: position.left,
					// 		width: width + 30
					// 	}).hide();

					// });
				break;
			}


		},
		sort : function(el) {
			// var el_index = el.index();

			// var tds = el.parents('table').find('tbody tr');
			// var sort_key = 'gender';
			// tds.sort(function(a,b){
			// 	// console.log(a.find('td')[el_index]);
			// 	a = $($(a).find('td')[el_index]).html();
			// 	b = $($(b).find('td')[el_index]).html();
			// 	console.log('a : '+ a+ ' b: '+b);
			// 	if (parseFloat(a) && parseFloat(b)) {
			// 		a = parseFloat(a);
			// 		b = parseFloat(b);
			// 	}

			// 	return (a > b) ? 1 : 0
			// });
			// el.parents('table').find('tbody').html(tds);
			// // console.log('sort');
			// console.log(el);
		},
		setLayout : function(layout) {

			layout = (typeof layout == 'string') ? layout : $(layout.currentTarget).val().toLowerCase();
			if (layout) {
				switch(layout) {
					case 'card' : layout = 'card'; break;
					case 'table' : layout = 'table'; break;
				}
				this.current_layout = layout;
				this.render();

				if (this.selected_button != null) { this.selected_button.deselect(); }

				if (this.buttons[this.current_layout]) {
					this.selected_button = this.buttons[this.current_layout].select();
				}

			}


		},
		setOptions : function(options) {
			if (options != null) {
				if (options['layout']) {

					setLayout(options['layout']);
				}
			}
		},
		openProcedure : function(event) {
			var model = $(event.currentTarget).data('model');
			this.tabManager.showPage(model);




		},



	});

})(jQuery);
