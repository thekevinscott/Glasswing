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

			var path_url = '#'+path.split('/').join('-').split('.').shift();
			// console.log(path_url);
			if ($(path_url).length) {
				// console.log('file exists');
				this.cache[path] = $(path_url).html();
			} else {
				// console.log('file does not exist');
				this.cache[path] = $.ajax({url: 'js/templates/'+path+"?bust="+(new Date).getTime(), async: false}).responseText;
			}


		}
		return this.cache[path];
	}
};
var octopus = function(amount) {
	if (! amount) { amount = 5; }

	$('*').each(function(){
		var ths = this;
		var wiggle = function() {
			var marginLeft = (Math.round(Math.random()*amount))+'px';
			var marginTop = (Math.round(Math.random()*amount))+'px';
			$(ths).animate({marginLeft: marginLeft, marginTop: marginTop},Math.round(Math.random()*100),function(){
				wiggle();
			});
		}
		wiggle();
	})
}
window['data'] = function(el,key) {
	return $(el).data(key);
};