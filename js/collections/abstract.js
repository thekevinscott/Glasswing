glasswing.collections.abstract = Backbone.Collection.extend({
	ingredients : {

	},
	getRandomIngredient : function(key) {
		if (this.ingredients.hasOwnProperty(key)) {
			return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
		} else {
			return null;
		}

	},

});