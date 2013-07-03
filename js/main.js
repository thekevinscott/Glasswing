require.config({
	urlArgs: "bust=" + (new Date()).getTime(), // clear this from production
	paths: {
		jquery: 'lib/jquery.2.0.2.min',
		underscore: 'lib/underscore.min',
		backbone: 'lib/backbone.min',
		easing : 'lib/jquery.easing.min',
		less : 'lib/less.min',

		audiojs : 'lib/audiojs/audio.min',
		markdown : 'lib/markdown'
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
        },
        'audiojs' : {
        	exports : 'audiojs'
        },
        'markdown' : {
        	exports : 'markdown'
        },
	}
});

require([
	'less',
	'router'
], function(less, router) {
	Backbone.sync = function(method, model, success, error){success();}
});