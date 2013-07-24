glasswing.models.prior = glasswing.models.abstract.extend({
	initialize : function(attributes) {
		if (! this.get('relevant')) { this.set('relevant',false); }
		if (! this.get('accession_id')) { this.set('accession_id',Math.round(Math.random()*99999)+10000); }

	}

});