glasswing.models.procedure = glasswing.models.abstract.extend({
	defaults : {
		// content : '',
		associated_page_view : 'report'
	},
	initialize : function(attributes) {

		if (! attributes || ! attributes.patient) {throw "No patient specified!";}
		this.view = new glasswing.views.procedure({model : this});


		// this.patient = options.patient;
		this.on("change", this.change, this);

		this.priors = new glasswing.collections.priors();
		var self = this;


		var number_of_priors = 20;
		var oldest_prior = new Date(2008,0,1);
		for (var i=0;i<number_of_priors;i++) {
			self.priors.add(new glasswing.models.prior({date : glasswing.randomDate(oldest_prior, new Date()) }));
		}



		this.priors.parent = this;

	},
	change : function() {


		var self  = this;


		if (self.view.report) { // do we even have a report available?
			_.each(this.changedAttributes(),function(val,key){

				if (self.view.report.$el.is(":visible")) {
					self.view.report.notify({key : key, val : val});
				} else {
					self.view.report.addNotification({key : key, val : val});
				}
			});


			console.log(self.worklist);
			console.log(self.worklist.tabManager);
			// tab manager needs to be notified. but if the tab is active, then do nothing.
			self.worklist.tabManager.notify(self.view.report, {}); // pass in an optional attributes array

		}



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
	},
	follow : function() {
		this.following = true;
	},
	unfollow : function() {
		this.following = false;
	},


});