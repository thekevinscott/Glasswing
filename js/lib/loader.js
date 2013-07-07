(function(){

	var dataMain,
		scripts = document.getElementsByTagName('script'),
		loadFile,
		i;



	loadFile = function(options){
		// var link = document.createElement(options.element);
	 //    link.type = options.type;


	 //    link.src = options.url + '?bust='+(new Date()).getTime();
	 //    console.log(link);
	 //    document.getElementsByTagName("head")[0].appendChild(link);
	 //    console.log(document.getElementsByTagName("head")[0]);
		// get some kind of XMLHttpRequest
		var xhrObj = createXMLHTTPObject();
		// open and send a synchronous request
		xhrObj.open('GET', options.url + '?bust='+(new Date()).getTime(), false);
		xhrObj.send('');
		// add the returned content to a newly created script tag
		var se = document.createElement('script');
		se.type = "text/javascript";
		se.text = xhrObj.responseText;
		document.getElementsByTagName('head')[0].appendChild(se);
	};


	var XMLHttpFactories = [
		function () {return new XMLHttpRequest()},
		function () {return new ActiveXObject("Msxml2.XMLHTTP")},
		function () {return new ActiveXObject("Msxml3.XMLHTTP")},
		function () {return new ActiveXObject("Microsoft.XMLHTTP")}
	];

	function createXMLHTTPObject() {
		var xmlhttp = false;
		for (var i=0;i<XMLHttpFactories.length;i++) {
			try {
				xmlhttp = XMLHttpFactories[i]();
			}
			catch (e) {
				continue;
			}
			break;
		}
		return xmlhttp;
	}


	for (i=0;i<scripts.length;i +=1) {
		if (scripts[i].getAttribute('data-main')) {
			dataMain = scripts[i].getAttribute('data-main');
			break;
		}
	}

	dataMain = dataMain.split(',');
	for (i=0;i<dataMain.length;i += 1) {
		loadFile({url: 'js/'+dataMain[i].trim()+'.js', element: 'script', type: 'text/javascript'})
	}
}());