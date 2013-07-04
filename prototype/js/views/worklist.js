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
		// template : template,
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
			console.log("*** initialize our worklist");
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.procedures = new glasswing.collections.procedures();
			this.procedures.view = this;

			// this.tabManager = attributes.tabManager;
			// console.log('init the worklist');

			this.name = 'Worklist';
			this.url = 'worklist';


			this.setLayout(this.current_layout);

		},

		render : function() {
			var self = this;

			// alert('render');

			self.$el.html(_.template(self.template, {}));
			self.$target = this.$el.find(self.target_selector);


			_.each(self.procedures.models,function(procedure, index){
				console.log(self.current_layout);
				procedure.view.setLayout(self.current_layout);


				self.$target.append(procedure.view.render().$el);


			});
			this.delegateEvents();


			this.$el.find('input[type=button]').each(function(){

				self.buttons[$(this).val().toLowerCase()] = $(this);
			});


			return this;
		},
		setLayout : function(layout) {

			layout = (typeof layout == 'string') ? layout : $(layout.currentTarget).val().toLowerCase();
			if (layout) {
				this.current_layout = layout;


				switch(this.current_layout) {

					case 'card' :
						this.template = glasswing.template('worklist/cards.html');
						// this.template_procedure = glasswing.template('worklist/card.html');

						this.target_selector = '.cards';
						// var self = this;
						// setTimeout(function(){
						// 	self.collectCategoriesBy('modality');
						// },1000);
					break;
					default :
						this.template = glasswing.template('worklist/table.html');
						// this.template_procedure = glasswing.template('worklist/row.html');

						this.target_selector = 'table tbody';
					break;
				}
				this.render();

				if (this.selected_button != null) { this.selected_button.deselect(); }

				this.selected_button = this.buttons[this.current_layout].select();
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
