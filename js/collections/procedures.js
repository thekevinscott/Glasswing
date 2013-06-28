define([

	'underscore',
	'backbone',

], function(_, Backbone) {

	return Backbone.Collection.extend({
		tagName : 'tr',
		className : 'procedure',

		initialize : function() {
			//_(this).bindAll('add');
		},

		// add : function(model) {
		// 	console.log('added this model');


		// 	// console.log('added procedure model. this should update the associated worklsit view');
		// 	// console.log(this.view);
		// 	//this.view.addProcedure(model);

		// }
	});
});
