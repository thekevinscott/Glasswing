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


		/** initialize priors **/
		var pa = new glasswing.collections.patients();
		var pr = new glasswing.collections.procedures();

		for (var i=0;i<number_of_priors;i++) {
			var caregivers = new glasswing.collections.caregivers();

			var length = Math.round(Math.random()*2)+2;
			for (var j=0;j<length;j++) {

				var first = pa.getRandomIngredient('first');
				var last = pa.getRandomIngredient('last');
				caregivers.add(new glasswing.models.caregiver({
					role : 'Resident',
					phone : '123-123-1234',
					pager :'123-123-1234',
					email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+pr.getRandomIngredient('hospital').toLowerCase()+'.com',
					date : new Date('6/5/2013'),
					first : first,
					last : last,
					backup : pa.getRandomIngredient('first') +' ' + pa.getRandomIngredient('last')
				}));

			}
			var prior = new glasswing.models.prior({caregivers : caregivers, date : glasswing.randomDate(oldest_prior, new Date()) });
			if (Math.round(Math.random()*3) == 1) {
				prior.set('relevant',true);
			}
			self.priors.add(prior);
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
	isFollowing : function() {
		return this.following;
	},
	follow : function() {
		this.following = true;
	},
	unfollow : function() {
		this.following = false;
	},
	getDate : function(key) {
		if (! key) { key = 'date';}
		return (this.get(key).getMonth()+1)+'/'+this.get(key).getDate()+'/'+this.get(key).getFullYear();
	},
	getName : function() {
		return this.get('procedure_type').toUpperCase() + ' '+this.get('body_part').toUpperCase();
	}

});