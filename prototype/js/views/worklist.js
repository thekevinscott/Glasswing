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

		buttons : {},
		selected_button : null,
		// changeLayout : function(event) {

		// },

		initialize : function(attributes) {
			// console.log("*** initialize our worklist");
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.current_layout = (localStorage && localStorage['worklist-layout']) ? localStorage['worklist-layout'] : 'table';

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

			var close = function(input_div) {
				input_div.stop().animate({marginTop: 0, height: 0},{duration: 500, easing:'easeInOutQuad'});
			}
			var open = function(input_div) {
				input_div.stop().animate({marginTop: -20, height: 20},{duration: 300, easing:'easeOutBounce'});
			}

			// console.log(this.$list.find('thead td'));
			self.$list.find('thead th')
			.mouseover(function(){
				// console.log('mouseover');
				var td_index = $(this).index();
				var input_div = $(self.$list.find('thead tr.search-fields .input')[td_index]);
				var input = input_div.find('input');
				open(input_div);

				// if (! $('input:focus').length) {

				// }
				input.unbind('click').click(function(e){
					e.stopPropagation();
				}).unbind('blur').blur(function(){
					$(this).removeClass('focus');
				}).unbind('keydown').keydown(function(){
					$(this).addClass('focus');
				}).unbind('keyup').keyup(function(e){
					if (e.keyCode == 13) {
						self.filter();
					}


					var val = $(this).val();
					if (val) {
						var index = $(this).parents('th').index();
						console.log(index);
						var trs = self.$list.find('tbody tr');

						trs.each(function(){
							var td = $($(this).find('td')[index]);
							var html = td.html().split('<span>').join('').split('</span>').join('');

							html = html.replace(new RegExp(val,"gm"),'<span>'+val+'</span>');
							td.html(html);

						});
					}


				});
				input.focus();

			})
			.mouseout(function(){
				// console.log('mouseover');
				var td_index = $(this).index();
				var input_div = $(self.$list.find('thead tr.search-fields .input')[td_index]);
				var input = input_div.find('input');
				if (! input.val() && ! input.hasClass(".focus")) {
					close(input_div);
				} else {
					input.unbind('blur').blur(function(){
						$(this).removeClass('focus');
						if (! input.val()) {
							close(input_div);
						}
					});
				}




			})
			.mousedown(function(event) {
				// console.log('mousedown');
			    $(window).mousemove(function() {
			        isDragging = true;
			        $(window).unbind("mousemove");

			        console.log('moving');

			    });
			})
			.mouseup(function(event) {
				// console.log('mouseup');
			    var wasDragging = isDragging;
			    isDragging = false;
			    $(window).unbind("mousemove");
			    if (wasDragging) {
			    	event.preventDefault();
			    }
			});


		},
		filter : function() {
			var self = this;
			var inputs = self.$list.find('table thead input');
			var tr = self.$list.find('table tbody tr');
			tr.each(function(){
				// $(this).show();
			});
			inputs.each(function(){
				var val = $(this).val().toLowerCase();
				if (val) {
					// console.log(this);
					// console.log($(this).parents('th'));
					var input_index = $(this).parents('th').index();
					tr.each(function(){
						var td = $($(this).find('td')[input_index]);
						var html = td.html().toLowerCase();
						// console.log(this);
						// console.log($(this).find('td'));
						// console.log(input_index);
						// console.log($(this).find('td')[input_index]);
						console.log('val: ' + val);
						console.log('html: ' + html);
						if (html.search(val) === -1) {
							// kill it
							$(this).hide();
						} else {
							$(this).show();
						}

					});
				} else {
					$(this).show();
				}


			});
		},
		afterRender : function() {
			var self = this;
			switch(this.current_layout) {
				case 'table' :

					self.$list.find('table').tablesorter();
					var inputs = self.$list.find('.search-fields input');
					self.$list.find('table').find('form').submit(function(e){
						alert('go');
						e.preventDefault();
					});
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


			if (this.selected_button != null) { this.selected_button.deselect(); }

			// console.log(this.buttons);

			if (this.buttons[this.current_layout]) {

				this.selected_button = this.buttons[this.current_layout].select();
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

				// console.log(this.buttons);

				if (this.buttons[this.current_layout]) {

					this.selected_button = this.buttons[this.current_layout].select();
				}

				if (localStorage) {
					localStorage['worklist-layout'] = this.current_layout;
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
