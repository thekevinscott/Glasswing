(function(){

	var dataMain,
		scripts = document.getElementsByTagName('script'),
		loadFile,
		i;



	window.loadFile = function(options){

		var xhrObj = createXMLHTTPObject();
		// open and send a synchronous request
		xhrObj.open('GET', options.url + '?bust='+(new Date()).getTime(), false);
		xhrObj.send('');
		// add the returned content to a newly created script tag
		var se = document.createElement('script');
		se.type = "text/javascript";
		se.text = xhrObj.responseText;
		// console.log(options.url);
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
		if (dataMain[i].substring(0,2) == '..' || dataMain[i].substring(0,2) == 'js') {
			var url = dataMain[i].trim()+'.js';
		} else {
			var url = 'js/'+dataMain[i].trim()+'.js';
		}


		window.loadFile({url: url, element: 'script', type: 'text/javascript'})
	}
}());