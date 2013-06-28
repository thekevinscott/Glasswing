define([

	'underscore',
	'backbone',
	'models/procedure'

], function(_, Backbone, procedure) {

	return Backbone.Collection.extend({
		tagName : 'tr',
		className : 'procedure',

		initialize : function() {
			// _(this).bindAll('add');
		},

		ingredients : {
			procedure_name : ['CT ABD', 'CR R LEG', 'MR ABD', 'CR L LEG', 'MR R LEG', 'MR L LEG'],
			last : ['Strosahen','Chen','Baldwin','Scott','Margines','Lew','Assaf','Chan','Aweida','Bossier','Kumar','Xao','Rogers','Block','Gebhardt','Mandel','Ticer','Butler'],
			hospital : ['Mercy','Northwestern','Good Heart','Great Lake','Advocate','Shepherd','Good Shepherd','Murphy']
		},
		getRandomProcedure : function(patient) {
			return new procedure({
				patient : patient,
				scanned_documents : Math.round(Math.random()*10),
				referring_physician : 'Thompson',

				procedure_name : this.getRandomIngredient('procedure_name'),
				priority : 2,
				procedure_class : '-',
				report_status : 'Unread',
				procedure_status : 'Comp.',
				referring_physician : this.getRandomIngredient('last'),
				hospital_name : this.getRandomIngredient('hospital'),
			});
		},
		getRandomIngredient : function(key) {
			return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
		}

		// add : function(model) {
		// 	console.log('added this model');
		// 	console.log(model);
		// 	if (this.model.get('id'))


		// 	// console.log('added procedure model. this should update the associated worklsit view');
		// 	// console.log(this.view);
		// 	//this.view.addProcedure(model);

		// }
	});
});
