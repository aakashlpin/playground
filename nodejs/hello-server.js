/*var http = require('http');
var s = http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/plain'});
	res.write("hello\n");
	setTimeout(function(){
		res.end("world");
	}, 2000);
});

s.listen(8000);*/


/* TCP Connection */
var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('hello\n');
	socket.write('world\n');

	socket.on('data', function(data) {
		socket.write(data);
	});
});

server.listen(8000);