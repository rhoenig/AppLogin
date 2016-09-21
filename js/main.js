var app = {
  	
   	this.login = function(event) {
	    event.preventDefault();
	    app.showAlert("Login", "Error");
	    alert("LoginAlert");
	    return false;
	};
	
	initialize: function() {
		var self = this;
		this.el = $('<div/>');
        this.el.on('click', '.login', this.login);
	}
	
};

app.initialize();