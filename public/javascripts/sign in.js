var group = document.querySelector('.js-groupname');
var pass = document.querySelector('.js-password');
var btn = document.querySelector('.js-button');

this_pass = "setare";

function Log_In(){
	if(group.value == "" || pass.value == "")
		return alertify.notify("groupname or password is empty!", 'error', 3);
	else if(this_pass==null || this_pass!= pass.value)
		return alertify.notify("incorrect groupname or password!", 'error', 3);
	else{
		alertify.notify("your sign in is successfully done!", 'success', 3);
		window.open("../htmlfiles/dashboard.html","_self");
	}
}







// dashboard
	document.getElementById("nemodar1").setAttribute("src","https://thingspeak.com/channels/667501/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15");
	document.getElementById("nemodar2").setAttribute("src","https://thingspeak.com/channels/667501/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15");
	document.getElementById("nemodar3").setAttribute("src","https://thingspeak.com/channels/667501/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15");
	document.getElementById("nemodar4").setAttribute("src","https://thingspeak.com/channels/667501/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15");
	document.getElementById("js-username").innerHTML = "X-mens"

	document.getElementById("user1").innerHTML = "users1"
	document.getElementById("user2").innerHTML = "users2"
	document.getElementById("user3").innerHTML = "users3"
	document.getElementById("user4").innerHTML = "users4"
	document.getElementById("user5").innerHTML = "users5"
	document.getElementById("user6").innerHTML = "users6"
	document.getElementById("user7").innerHTML = "users7"
	document.getElementById("user8").innerHTML = "users8"
	document.getElementById("user9").innerHTML = "users9"
	document.getElementById("user10").innerHTML = "users10"