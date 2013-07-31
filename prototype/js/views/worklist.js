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
		  // "click tbody tr" : "openexam",
		  // "click .cards .card" : "openexam",


		},

		buttons : {},
		selected_button : null,
		// changeLayout : function(event) {

		// },

		initialize : function(attributes) {
			// console.log("*** initialize our worklist");
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.default_layout = 'grid';
			this.current_layout = (localStorage && localStorage['worklist-layout']) ? localStorage['worklist-layout'] : this.default_layout;

			this.exams = new glasswing.collections.exams();
			this.exams.view = this;

			// this.tabManager = attributes.tabManager;
			// console.log('init the worklist');

			this.name = 'Worklist';
			this.url = 'worklist';


			this.templates = {
				card : { template : glasswing.template('worklist/cards'), selector : '.cards'},
				table : { template : glasswing.template('worklist/table'), selector : 'tbody'},
				grid : { template : glasswing.template('worklist/grid'), selector : '.grid-contents'},
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


			_.each(self.exams.models,function(exam, index){

				exam.view.setLayout(self.current_layout);


				self.$target.append(exam.view.render().$el);


			});
			this.delegateEvents();


			this.$el.find('.layouts a.button').each(function(){

				self.buttons[$(this).attr('rel').toLowerCase()] = $(this);
			});



			switch(self.current_layout) {
				case 'table' : self.attachTableEvents(); break;
			}

			if (! $('.tab-worklist .layout').length) {
				$('.tab-worklist').prepend('<div class="layout" />');
			}

			$('.tab-worklist').removeClass('grid');
			$('.tab-worklist').removeClass('card');
			$('.tab-worklist').addClass(self.current_layout);

			this.$('.prettyDate').prettyDate();
			// console.log($('input[hint]')[0]);
			this.$('input[hint]').hint();


			this.$('.layouts a.button').click(function(e){
				self.setLayout(e);
			});

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

					var val = $(this).val();

					var index = $(this).parents('th').index();

					var trs = self.$list.find('tbody tr');

					trs.each(function(){
						var td = $($(this).find('td')[index]);
						var html = td.html().split('<span>').join('').split('</span>').join('');

						var search_index = html.search(new RegExp(val,"gmi"));
						if (search_index !== -1) {
							html = html.substring(0,search_index) + '<span>' + html.substring(search_index,search_index+val.length) + '</span>' + html.substring(search_index+val.length);

						}
						td.html(html);


					});



					if (e.keyCode == 13) {
						self.filter();
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
				$(this).show();
				$(this).find('td').each(function(){
					html = $(this).html().split('<span>').join('').split('</span>').join('');
					$(this).html(html);
				})

			});
			var search_present = false;
			inputs.each(function(){
				var val = $(this).val().toLowerCase();
				if (val) {
					search_present = true;
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
						// console.log('val: ' + val);
						// console.log('html: ' + html);
						if (html.search(val) === -1) {
							// kill it
							$(this).hide();
						} else {
							// $(this).show();

						}

					});
				} else {

				}


			});
			if (! search_present) {
				tr.show();
			}
		},
		afterRender : function() {
			var self = this;
			// console.log(self.$el);


			switch(this.current_layout) {
				case 'table' :

					self.$list.find('table').tablesorter();
					var inputs = self.$list.find('.search-fields input');
					self.$list.find('table').find('form').submit(function(e){
						// alert('go');
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
				case 'grid' :
					// self.$('.grid-header p').click(function(e){
					// 	var old = $(this).html();
					// 	var form = $('<form />');
					// 	var input = $('<input name="something" type="text" />');
					// 	$(this).html(form);
					// 	form.html(input);
					// 	input.focus();
					// 	form.submit(function(e){
					// 		e.preventDefault();
					// 		$(this).replaceWith(input.val());
					// 	});

					// });





					self.$('.grid-header td').click(function(e){
						$(this).find('input:first').focus();
					}).each(function(){
						var inputs = $(this).find('input, select');
						inputs.each(function() {
							var sort = $('<a href="javascript:;" class="sort"></a>');
							$(this).after(sort);
							sort.click(function(e){
								e.stopPropagation();


								if ($(this).hasClass('desc')) {
									$(this).addClass('asc');
									$(this).removeClass('desc');
								} else if ($(this).hasClass('asc')) {
									// $(this).addClass('desc');
									$(this).removeClass('asc');
								} else {
									if (self.sort_el) {
										self.sort_el.next().removeClass('asc').removeClass('desc');
									}

									$(this).addClass('desc');
								}
								self.sort_el = $(this).prev();
								self.search();
								// console.log('sort');

							});
						});

					});

					var filterRows = function(e) {
						var searched_models = self.search(e);

						console.log(searched_models);
						_.each(self.exams.models,function(exam){
							// console.log(exam.view.$grid);
							exam.view.$grid.hide();
						});


						// console.log(searched_models);
						_.each(searched_models,function(exam){
							// console.log(exam.view);
							exam.view.$grid.show();
						});
					}
					self.$search_fields = self.$('.grid-header input, .grid-header select');

					self.$search_fields.click(function(e){
						e.stopPropagation();
					});
					self.$search_fields.keydown(function(e){

						if (e.keyCode == 13 ) {
							filterRows(e);
						}
					}).focus(function(e){
						// console.log(this);
						// console.log($(this).attr('class'));
						switch($(this).attr('class')) {
							case 'gender' :
							break;
						}
					}).change(function(e){
						filterRows(e);
					});
					$('.grid-header select').customSelect();




				break;
			}
			var changeWorklist = function() {
				if (self.$('.grid-header').length) {
					self.$('.grid-header .exam_name').val($(this).val());
					filterRows();
				}
			}
			self.$('select').customSelect();
			self.$('select').change(changeWorklist);




			if (this.selected_button != null) { this.selected_button.deselect(); }

			// console.log(this.buttons);

			if (this.buttons[this.current_layout]) {

				this.selected_button = this.buttons[this.current_layout].select();
			}

			this.setFilters();
		},
		setFilters : function() {

			if (this.current_layout=='grid') {
				$('.filters').css({width: 0});
				$('.worklist .container').css({right: 0});
			} else {
				$('.filters').css({width: 320});
				$('.worklist .container').css({right: 340});
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


			// alert(layout);
			layout = (typeof layout == 'string') ? layout : $(layout.currentTarget).attr('rel').toLowerCase();
			if (layout) {
				switch(layout) {
					case 'card' : layout = 'card'; break;
					case 'grid' : layout = 'grid'; break;
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

			this.setFilters();





		},
		setOptions : function(options) {
			if (options != null) {
				if (options['layout']) {

					setLayout(options['layout']);
				}
			}
		},
		openexam : function(event) {
			var model = $(event.currentTarget).data('model');
			this.tabManager.showPage(model);




		},
		search : function(event) {
			var self = this;
			if (event) { event.preventDefault(); }
			var search_fields = {};
			self.$search_fields.each(function(){
				var class_name = $(this).attr('class').split(' ').shift();
				var val = $(this).value();
				if (val) {

					// switch(class_name) {
					// 	case 'end_time' : case 'dob' :
					// 		val = Date.parse(val);
					// 	break;

					// }
					// console.log(class_name);
					// console.log(val);
					search_fields[class_name] = val;
				}

			});

			var options = { search : search_fields };
			if (self.sort_el) {
				var next = self.sort_el.next();
				options.sort = { key : self.sort_el.attr('class').split(' ').shift(), dir : (next.hasClass('asc')) ? 'asc' : 'desc' };
			}
			console.log(options);
			return self.exams.getExams(options);

			// console.log(exams);
		}



	});

})(jQuery);
