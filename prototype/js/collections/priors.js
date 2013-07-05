glasswing.collections.priors = Backbone.Collection.extend({
	model: glasswing.models.prior,
	initialize : function() {

		_(this).bindAll('add');

	},
	// id_offset : 200100,
	add : function(model) {
		console.log("these should enter in sorted direction");
		Backbone.Collection.prototype.add.call(this, model);
		// if (! model.get('id')) {
		// 	model.set('id',this.id_offset+this.length);

		// }
	}


});
