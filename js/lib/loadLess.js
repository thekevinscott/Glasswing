(function(){

	var dataStyles,
		scripts = document.getElementsByTagName('script'),
		lessjs = '//cdnjs.cloudflare.com/ajax/libs/less.js/1.3.3/less.min.js',
		loadFile,
		i;

	loadFile = function(options){
		var link = document.createElement(options.element);
	    link.type = options.type;
	    link.rel = options.rel;
	    link.href = options.url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	};

	for (i=0;i<scripts.length;i +=1) {
		if (scripts[i].getAttribute('data-styles')) {
			dataStyles = scripts[i].getAttribute('data-styles');
			break;
		}
	}
	dataStyles = dataStyles.split(',');

	for (i=0;i<dataStyles.length;i += 1) {
		loadFile({url : 'less/'+dataStyles[i].trim()+'.less', element : 'link', type : 'text/css', rel : 'stylesheet/less'});
	}
	loadFile({url : lessjs, element : 'script'});
}());