var timer = {
	callMeMaybe: function() {
		var ref = this;
		var val = setTimeout(function() {
			console.log('Time is running out');
			ref.callMeMaybe();
		}, 1000);
	},

	keepCallingMe: function() {
		var ref = this;
		var val = setInterval(function(){
			console.log("keep calling");
		}, 1000);
		console.log("first call");
	}
};

timer.callMeMaybe();