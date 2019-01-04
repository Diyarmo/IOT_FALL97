var btn = document.querySelector('.Reg');
var users = new Array(10);

function Sign_Up() {
	var user = document.querySelector('.js-groupname').value;
	var chid = document.querySelector('.js-channelid').value;
	var pass = document.querySelector('.js-password').value;
	var pass2 = document.querySelector('.js-re-password').value;
    if (user == '' | pass == '' | chid == '')
    {
        return alertify.notify("groupname or password or channel id is empty!", 'error', 3);
	}
	if (pass != pass2) return alertify.notify("incorrect passwords!", 'error', 3);
	
    var request = new XMLHttpRequest();
    request.open('POST', '/signup');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({
        groupname: user,
		password: pass,
		channelID: chid,
        members: users
    }));
    request.addEventListener('loadend', function(){
        var f = JSON.parse(request.response);
        alertify.notify(f.message);
    });

}

var i=0;

function textBoxCreate() {
	if(i > 9) return alertify.notify("many users!", 'error', 3);
	var y = document.createElement("INPUT");
	y.setAttribute("type", "text");
	y.setAttribute("Placeholder", "User" + i);
	y.setAttribute("Name", "Name_" + i);
	document.getElementById("myForm").appendChild(y);
	y.style.width = "150px";
	y.style.height = "24px";
	y.style.backgroundColor = "rgb(248, 251, 255)";
	y.style.borderColor = "darkgray";
	y.style.color = "darkgray";
	y.style.position = "relative";
	y.style.top = "20px";
	y.style.left = "70px";
	
	document.getElementById("myMain").style.height = "120%";
	
	users[i] = y;
	i++;
}