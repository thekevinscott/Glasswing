define([
	'underscore',
	'backbone',
	'jquery',
	'models/worklist',

	'models/patient',
	'models/procedure',
	'lib/text!templates/worklist/table.html',

	'lib/text!templates/worklist/cards.html',
	'lib/text!templates/worklist/row.html',
	'lib/text!templates/worklist/card.html',
], function(_, Backbone, $, worklist, patient, procedure, template_table, template_cards, template_procedure_table, template_procedure_cards) {

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
	return Backbone.View.extend({
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
		changeLayout : function(event) {

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
					this.template = template_cards;
					this.template_procedure = template_procedure_cards;
					this.target_selector = '.cards';
					var self = this;
					setTimeout(function(){
						self.collectCategoriesBy('modality');
					},1000);
				break;
				default :
					this.template = template_table;
					this.template_procedure = template_procedure_table;
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
		initialize : function(attributes) {

			this.tabManager = attributes.tabManager;
			// console.log('init the worklist');

			this.name = 'Worklist';
			this.url = 'worklist';

			this.model.view = this;

			this.setLayout(this.current_layout || 'grid');

		},
		openProcedure : function(event) {
			var model = $(event.currentTarget).data('model');
			this.tabManager.showPage(model);


			//window.location.hash = 'procedure/' + model.get('id');
			//console.log("is it maybe a bit clunk to change the url directly?");
			//Router.navigate('procedure/' + model.get('id'), {trigger: true, replace: true});
			// I think the above'd be better

		},
		drawProcedure : function(procedure,target) {

			var procedure_el = $(_.template(this.template_procedure, {
				id : procedure.get('id'),
				scanned_documents : procedure.get('scanned_documents'),
				dob : procedure.get('patient').get('dob'),
				first : procedure.get('patient').get('first'),
				last : procedure.get('patient').get('last'),
				gender : procedure.get('patient').get('gender'),
				patient_id : procedure.get('patient').get('id'),
				patient_risks : procedure.get('patient').get('risks'),
				procedure_name : procedure.get('procedure_name'),
				priority : procedure.get('priority'),
				procedure_class : procedure.get('procedure_class'),
				report_status : procedure.get('report_status'),
				procedure_status : procedure.get('procedure_status'),
				referring_physician : procedure.get('referring_physician'),
				hospital_name : procedure.get('hospital_name'),

			}));
			procedure_el.data('model',procedure);
			procedure.view = procedure_el;
			target.append(procedure_el);


		},

		render : function() {
			var self = this;
			this.$el.html(_.template(this.template, {}));
			this.$target = this.$el.find(this.target_selector);

			var self = this;
			_.each(this.model.getProcedures(),function(procedure, index){

				self.drawProcedure(procedure,self.$target);
			});
			this.delegateEvents();


			this.$el.find('input[type=button]').each(function(){

				self.buttons[$(this).val().toLowerCase()] = $(this);
			});

			return this;
		}

	});
});
