glasswing.collections.priors = Backbone.Collection.extend({
	model: glasswing.models.prior,
	initialize : function() {

		_(this).bindAll('add');
		this.sort_key = 'date';

	},
	add : function(model) {
		Backbone.Collection.prototype.add.call(this, model);
	},
	comparator: function(a, b) {
	    a = a.get(this.sort_key);
	    b = b.get(this.sort_key);
	    return a.getTime() > b.getTime() ?  1
	         : a.getTime() < b.getTime() ? -1
	         :          0;
	}


});
