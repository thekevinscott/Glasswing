glasswing.collections.procedures = Backbone.Collection.extend({
	tagName : 'tr',
	className : 'procedure',

	initialize : function(attributes) {
		// this.view = attributes.view;
		_(this).bindAll('add');
	},

	ingredients : {
		procedure_type : ['CT'],
		body_part : ['ABD', 'L LEG', 'R LEG', 'HEAD', 'CHEST', 'ANKLE', 'WRIST'],
		clinical_indications : ['Right lower lobe lung mass seen on abdominal/pelvic CT scan.'],
		procedure_informations : ['Contrast enhanced and unenhanced CT scan of the chest was performed. 92 cc Isovue was administered IV.'],

		hospital : ['Mercy','Northwestern','Good Heart','Great Lake','Advocate','Shepherd','Good Shepherd','Murphy'],
		role : ['Resident','Technologist']
	},
	add : function(procedureModel) {

		Backbone.Collection.prototype.add.call(this, procedureModel);

		if (! procedureModel.get('id')) { procedureModel.set('id',this.models.length); }

		procedureModel.view.render();

		if (this.view.$target) {
			// optionally, if our parent table is available, render to it
			this.view.$target.append(procedureModel.view.render().$el);
		}

	},
	getProcedure : function(procedure_id) {
		return this.get(procedure_id);
	},
	getProcedures : function() {
		// console.log('get procedure!');
		return this.models;
	},
	getProceduresByModality : function() {

		var procedures = {};
		$(this.getProcedures()).each(function(){
			var procedure_name = this.get('procedure_name');
			if (! procedures[procedure_name]) { procedures[procedure_name] = []; }
			procedures[procedure_name].push(this);
		});
		return procedures;
	},
	getRandomProcedure : function(patient, priors, id) {
		var p = new glasswing.collections.patients();
		var caregivers = new glasswing.collections.caregivers();
		// var length = Math.round(Math.random()*0)+2;

		var first = p.getRandomIngredient('first');
		var last = p.getRandomIngredient('last');
		caregivers.add(new glasswing.models.caregiver({
			role : 'Referring Physician',
			phone : '123-123-1234',
			pager :'123-123-1234',
			email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+this.getRandomIngredient('hospital').toLowerCase()+'.com',
			date : new Date('6/5/2013'),
			first : first,
			last : last,
			backup : p.getRandomIngredient('first') +' ' + p.getRandomIngredient('last')
		}));

		for (var i=0;i<1;i++) {
			var first = p.getRandomIngredient('first');
			var last = p.getRandomIngredient('last');
			caregivers.add(new glasswing.models.caregiver({
				role : this.getRandomIngredient('role'),
				phone : '123-123-1234',
				pager :'123-123-1234',
				email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+this.getRandomIngredient('hospital').toLowerCase()+'.com',
				date : new Date('6/5/2013'),
				first : first,
				last : last,
				backup : p.getRandomIngredient('first') +' ' + p.getRandomIngredient('last')
			}));
		}

		return new glasswing.models.procedure({
			id : id,
			patient : patient,
			scanned_documents : Math.round(Math.random()*10),
			referring_physician : 'Thompson',
			date : glasswing.randomDate(new Date()),
			end_time : new Date((new Date()).getTime() - Math.round(Math.random()*1000*360)),
			procedure_name : this.getRandomIngredient('procedure_type') + ' ' + this.getRandomIngredient('body_part'),
			priority : Math.round(Math.random()*2),
			procedure_class : '-',
			report_status : 'Unread',
			procedure_status : 'Comp.',
			referring_physician : p.getRandomIngredient('first')+ ' ' + p.getRandomIngredient('last'),
			hospital_name : this.getRandomIngredient('hospital'),
			caregivers : caregivers,
			priors : priors
		});
	},
	getRandomIngredient : function(key) {
		return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
	}

});








