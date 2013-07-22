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

		if (this.get('lock')===undefined) {
			this.set('lock',false);
		}
		if (this.get('ready')===undefined) {
			this.set('ready',true);
		}



		this.priors = new glasswing.collections.priors();

		var self = this;




		var number_of_priors = 5;
		var oldest_prior = new Date(2008,0,1);


		/** initialize priors **/
		var pa = new glasswing.collections.patients();
		var pr = new glasswing.collections.procedures();



		for (var i=0;i<attributes.priors.length;i++) {
			var caregivers = new glasswing.collections.caregivers();


			// var length = Math.round(Math.random()*2)+1;
			for (var j=0;j<1;j++) {

				var first = pa.getRandomIngredient('first');
				var last = pa.getRandomIngredient('last');
				caregivers.add(new glasswing.models.caregiver({
					role : 'Referring Physician',
					phone : '123-123-1234',
					pager :'123-123-1234',
					email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+pr.getRandomIngredient('hospital').toLowerCase()+'.com',
					date : new Date('6/5/2013'),
					first : first,
					last : last,
					backup : pa.getRandomIngredient('first') +' ' + pa.getRandomIngredient('last')
				}));

			}
			var prior_data = $.extend({caregivers : caregivers},attributes.priors[i]);
			// var prior = new glasswing.models.prior({caregivers : caregivers, date : glasswing.randomDate(oldest_prior, new Date()) });
			var prior = new glasswing.models.prior(prior_data);
			// if (Math.round(Math.random()*3) == 1) {
			// 	prior.set('relevant',true);
			// }
			self.priors.add(prior);
		}


		// console.log(attributes);
		// console.log('procedure-'+this.get('id')+'-inqueue');
		// console.log(localStorage['procedure-'+this.get('id')+'-inqueue']);

		_.each(['in-queue','in-folder'],function(key){
			if (localStorage['procedure-'+self.get('id')+'-'+key]) {
				self.toggle('in-queue',localStorage['procedure-'+self.get('id')+'-'+key]);
			}
		});



		this.priors.parent = this;

	},
	change : function(obj) {


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

		_.each(obj.changed,function(val,key){

			self.view.change(key,val);
			if (self.view.hasOwnProperty('report')) {
				self.view.report.change(key,val);
			}

		});




	},
	toggle : function(key,val) {
		if (val) {
			this.set(key,val);
		} else {

			if (this.get(key)) {
				this.set(key,false);
			} else {
				this.set(key,true);
			}
		}
		localStorage['procedure-'+this.get('id')+'-'+key] = this.get(key);
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