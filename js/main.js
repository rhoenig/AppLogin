var app = {

    showAlert: function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	},
	
	initialize: function() {
		
	}
};

app.initialize();

$("#login").click(function(){
app.showAlert("Clicked", "Error");
var email=$("#email").val();
var password=$("#password").val();
var dataString="email="+email+"&password="+password+"&login=";
app.showAlert(dataString, "Error");
if($.trim(email).length>0 & $.trim(password).length>0)
{
$.ajax({
type: "POST",
url: "http://testing.hoenigwebdesign.com/dev/login.php",
data: dataString,
crossDomain: true,
cache: false,
beforeSend: function(){ $("#login").html('Connecting...');},
success: function(data){
if(data=="success")
{
localStorage.login="true";
localStorage.email=email;
window.location.href = "index.html";
}
else if(data="failed")
{
alert("Login error");
$("#login").html('Login');
}
}
});
}return false;
});