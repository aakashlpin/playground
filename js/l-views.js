var events = new EventEmitter();

var UserView = function(el, view) {
	this.el = el;
	this.view = view;

	events.addListener('user:showImage', this.showImage, this);

	events.emit('user:created');

}



UserView.prototype.showImage = function() {
	this.el.append("<img src = " + this.user.image + "/>");
}

UserView.prototype.$ = function(selector) {
	return this.el.find(selector);
}

var user = {
	image : './test.png'
};

var view = new UserView($('.user'), user);

view.showImage();