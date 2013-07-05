glasswing.models.procedure = glasswing.models.abstract.extend({
	defaults : {
		// content : '',
		associated_page_view : 'report'
	},
	initialize : function(attributes) {

		if (! attributes || ! attributes.patient) {throw "No patient specified!";}
		this.view = new glasswing.views.procedure({model : this});

		// this.patient = options.patient;
		this.on("change", function() {
		  	if (this.hasChanged()) {
		    	this.view.render();
		  	}
		});

		var priors = [

			{date : new Date('2008') },

			{date : new Date('1/2/2009') },
			{date : new Date('2/2/2009') },
			{date : new Date('3/2/2009') },
			{date : new Date('4/2/2009') },
			{date : new Date('5/2/2009') },
			{date : new Date('6/2/2009') },
			{date : new Date('7/2/2009') },
			{date : new Date('8/2/2009') },
			{date : new Date('9/2/2009') },
			{date : new Date('10/2/2009') },
			{date : new Date('11/2/2009') },
			{date : new Date('12/2/2009') },
			{date : new Date('3/2/2010') },
			{date : new Date('6/6/2010') },
			{date : new Date('3/3/2011') },
			{date : new Date('1/2/2012') },
			{date : new Date('2/2/2012') },
			{date : new Date('3/2/2012') },
			{date : new Date('4/2/2012') },
			{date : new Date('5/2/2012') },
			{date : new Date('6/2/2012') },
			{date : new Date('7/2/2012') },
			{date : new Date('8/2/2012') },
			{date : new Date('9/2/2012') },
			{date : new Date('10/2/2012') },
			{date : new Date('2013') }
		];
		this.priors = new glasswing.collections.priors();
		var self = this;
		_.each(priors,function(prior) {
			self.priors.add(new glasswing.models.prior(prior));
		});

		this.priors.parent = this;

	},
	// we overload our parent get function
	get: function (attr) {
		switch(attr) {
			case 'name' :
				return this.get('patient').getName();
			break;
			default :
	  			return Backbone.Model.prototype.get.call(this, attr);
			break;
		}

	},
	isStat : function() {
		return (this.get('priority') > 2) ? true : false;
	},
	getPriors : function() {
		// var priors = ;
		// return priors;
		return this.priors.models;
	}

});