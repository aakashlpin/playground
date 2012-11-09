var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(req, res) {
		var postData = "";
		var pathname = url.parse(req.url).pathname;
		console.log("Requested URL: " + pathname);
		route(handle, pathname, res, req);	
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server started");

}

exports.start = start;
