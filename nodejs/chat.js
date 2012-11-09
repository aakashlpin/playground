net =  require('net');
var sockets = [];	//keeping pppl who connect to it
var s = net.Server(function(socket) {
	sockets.push(socket);

	socket.on('data', function(d) {
		for(var i = 0; i < sockets.length; i++) {
			//preventing self echo 
			/*if(sockets[i] == socket) continue;*/
			
			sockets[i].write(d);
		}
	});

	socket.on('end', function() {
		var i = sockets.indexOf(socket);
		sockets.splice(i, 1);
	});
});

s.listen(8000);