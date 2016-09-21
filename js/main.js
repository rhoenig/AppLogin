var app = {

    showAlert: function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	},
	
	this.login = function(event) {
	    event.preventDefault();
	    app.showAlert("Login", "Error");
	    alert("LoginAlert");
	    return false;
	};
	
	initialize: function() {
		this.el = $('<div/>');
        this.el.on('click', '.login', this.login);
	}
};

app.initialize();