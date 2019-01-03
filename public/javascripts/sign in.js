var group = document.querySelector('.js-groupname');
var pass = document.querySelector('.js-password');

var btn = document.querySelector('.js-button');
console.log(5,pass.value);

function Log_In(){
	//var this_pass = localStorage.getItem(group.value);
	if(group.value == "" || pass.value == "")
		return alertify.notify("groupname or password is empty!", 'error', 3);
	else if(this_pass==null || this_pass!= pass.value)
		return alertify.notify("incorrect groupname or password!", 'error', 3);
	else
		return alertify.notify("your sign in is successfully done!", 'success', 3);
}