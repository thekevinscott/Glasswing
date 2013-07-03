define([
	'underscore',
	'backbone'
], function(_, Backbone) {

	return Backbone.Model.extend({
	  	initialize : function(data) {
	  		this.id = data.id;
	  		this.title = data.title;
	  		this.panes = data.panes;
	  		this.panes_by_order = data.panes_by_order;
		},
	});
});

