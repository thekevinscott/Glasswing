var glasswing = {
	err : function(msg) {
		if (true) { console.log(msg); }
	},
	notif : function(msg)  {
		if (false) { console.log(msg); }
	},
	cache : {},
	views : { guide : {} }, models : {guide : {}}, collections : {guide : {}},
	template : function(path) {
		if (path.split('.').length < 2) { path += '.html'; }
		if (! this.cache[path]) {
			this.cache[path] = $.ajax({url: 'js/templates/'+path, async: false}).responseText;
		}
		return this.cache[path];
	}
};