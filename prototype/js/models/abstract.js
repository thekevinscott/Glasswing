glasswing.models.abstract = Backbone.Model.extend({
	initialize : function(attributes) {
		if (attributes && attributes['view']) {
			this.view = attributes.view;
		}
	}
});