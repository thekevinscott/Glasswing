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
		  "click tbody tr" : "openProcedure",
		  "click .cards .card" : "openProcedure",
		  "click input[type=button]" : "setLayout"
		},
		current_layout : null,
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

			this.setLayout(this.current_layout || 'grid');

		},
		collectCategoriesBy : function(category) {
			var cards = $('.cards .card');

			var modality_count = 0;
			var modalities = this.model.getProceduresByModality();

			var card_width = $('.cards .card').width() + 20;

			for (var modality_type in modalities) {
				var modality = modalities[modality_type];
				this.$target.append("<p style='position: absolute; text-align: center; top: 160px; width: "+card_width+";left: "+(modality_count*card_width)+"'>"+modality_type+"</p>");
				(function(modality,modality_count){
					for (var i=0;i<modality.length;i++) {
						var el = modality[i];
						(function(card,position,i){


							setTimeout(function(){
								$(card).css({
									position: 'absolute',
									top: position.top,
									left: position.left
								});
								var offset = i*2;
								if (offset > 20) { offset = 20;}
								$(card).animate({
									top: offset,
									left: offset + (modality_count*card_width)
								});
							},1);

						}(el.view,$(el.view).position(),i));
					}
				})(modality,modality_count);
				modality_count++;
			}

		},
		setLayout : function(event) {

			this.current_layout = (typeof event == 'string') ? event : $(event.currentTarget).val().toLowerCase();;
			switch(this.current_layout) {

				case 'card' :
					this.template = glasswing.template('worklist/cards.html');
					this.template_procedure = glasswing.template('worklist/card.html');

					this.target_selector = '.cards';
					// var self = this;
					// setTimeout(function(){
					// 	self.collectCategoriesBy('modality');
					// },1000);
				break;
				default :
					this.template = glasswing.template('worklist/table.html');
					this.template_procedure = glasswing.template('worklist/row.html');

					this.target_selector = 'table tbody';
				break;
			}
			this.render();

			if (this.selected_button != null) { this.selected_button.deselect(); }

			this.selected_button = this.buttons[this.current_layout].select();

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


		render : function() {
			var self = this;


			self.$el.html(_.template(self.template, {}));
			self.$target = this.$el.find(self.target_selector);


			_.each(self.procedures.models,function(procedure, index){
				//self.$target.append('hi');

				self.$target.append(procedure.view.render().$el);
				// console.log(procedure);
				// console.log(procedure.attributes);
				// console.log(procedure.get('cid'));
				// console.log(procedure.get('procedure_name'));
				// console.log(procedure.get('patient'));

				// var procedure_el = $(_.template(self.template_procedure, {
				// 	id : procedure.get('id'),
				// 	scanned_documents : procedure.get('scanned_documents'),
				// 	dob : procedure.get('patient').get('dob'),
				// 	first : procedure.get('patient').get('first'),
				// 	last : procedure.get('patient').get('last'),
				// 	gender : procedure.get('patient').get('gender'),
				// 	patient_id : procedure.get('patient').get('id'),
				// 	patient_risks : procedure.get('patient').get('risks'),
				// 	procedure_name : procedure.get('procedure_name'),
				// 	priority : procedure.get('priority'),
				// 	procedure_class : procedure.get('procedure_class'),
				// 	report_status : procedure.get('report_status'),
				// 	procedure_status : procedure.get('procedure_status'),
				// 	referring_physician : procedure.get('referring_physician'),
				// 	hospital_name : procedure.get('hospital_name'),

				// }));
				// procedure_el.data('model',procedure);
				// self.$target.append(procedure_el);


			});
			this.delegateEvents();


			this.$el.find('input[type=button]').each(function(){

				self.buttons[$(this).val().toLowerCase()] = $(this);
			});


			return this;
		}

	});

})(jQuery);
