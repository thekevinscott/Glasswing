glasswing.models.abstract = Backbone.Model.extend({
	initialize : function(attributes) {
		if (attributes && attributes['view']) {
			this.view = attributes.view;
		}
	},
	getDate : function(key) {
		if (! key) { key = 'date';}
		var d = this.get(key);
		return this.getMonth(d)+'/'+d.getDate()+'/'+d.getFullYear();
	},
	getDateAndTime : function(key) {
		if (! key) { key = 'date';}
		var d = this.get(key);
		return this.getDate(key)+' '+d.getHours()+':'+this.getMinutes(d);
	},
	getMonth : function(d) {
		return d.getMonth()+1;
	},
	getMinutes : function(d) {
		return (d.getMinutes() > 9) ? d.getMinutes() : '0'+d.getMinutes();
	}
});