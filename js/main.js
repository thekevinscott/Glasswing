require.config({
	urlArgs: "bust=" + (new Date()).getTime(), // clear this from production
	paths: {
		jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min',
		underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
		backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
		easing : '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min',
		less : '//cdnjs.cloudflare.com/ajax/libs/less.js/1.3.3/less.min',
	},
	shim: {
	    'backbone': {
	        deps: ['jquery','underscore'],
	        exports: 'Backbone'
	    },
        'underscore': {
            exports: '_'
        },
        'glasswing' : {
        	deps : ['backbone', 'collections/patients'],
        	exports : 'glasswing'
        }
	}
});

require([
	'less',
	'glasswing'
], function(less, glasswing) {
	glasswing.initialize();
});