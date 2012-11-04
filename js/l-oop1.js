/* Creating a sample app that 
	1. 2 views
	2. One button. #btn
	3. Click button in step 2 to get random quote in a div #qoute
*/

/* Writing jQuery code for that */

$(document).ready(function() {

	var quotes = ['Tide and tide wait for none', 'Naach na aawe aangan teda', 'Buri nazar waale tera muh kaala'],
		btn = $('#btn'),
		div = $('#qoute'),
		rnd;
	
	btn.click(function() {
		rnd = Math.floor(Math.random()*3);
		div.html(quotes[rnd]);
	});

});


/* Writing OOJ/ BBJS for that */

var strings = ['Tide and tide wait for none', 'Naach na aawe aangan teda', 'Buri nazar waale tera muh kaala'];

var Quote = Backbone.Model.extend({

});

var Quotes = Backbone.Collection.extend({
	model: Quote

});


var btnView = Backbone.View.extend({
	events: {
		'click #btn': randQuote
	},

	randQuote: function() {
		var rnd = Math.floor(Math.random()*3);
		
	}

});


$(document).ready(function() {
	btn = new btnView('#btn');
	divView = new divView('#qoute');
});