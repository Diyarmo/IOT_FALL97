var group = document.querySelector('.js-groupname');
var pass = document.querySelector('.js-password');
var re_pass = document.querySelector('.js-re-password');


var btn = document.querySelector('.js-button');

function Sign_Up() {
	if (group.value == "" || pass.value == "" || re_pass.value == "") {
		return alertify.notify("groupname or password is empty!", 'error', 3);
	}
	else if (pass.value != re_pass.value) {
		return alertify.notify("incorrect password!", 'error', 3);
	}
}

var i = 1;

var users = new Array(10);

function textBoxCreate() {
	if(i > 9) return alertify.notify("many users!", 'error', 3);
	var y = document.createElement("INPUT");
	y.setAttribute("type", "text");
	y.setAttribute("Placeholder", "User" + i);
	y.setAttribute("Name", "Name_" + i);
	document.getElementById("myForm").appendChild(y);
	y.style.width = "130px";
	y.style.height = "24px";
	y.style.backgroundColor = "rgb(248, 251, 255)";
	y.style.borderColor = "darkgray";
	y.style.color = "darkgray";
	users[i] = y;
	document.getElementById("myMain").style.height = "120%";
	i++;
}
