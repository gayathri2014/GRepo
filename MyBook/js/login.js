function validate(){

var form = document.forms['form'];
	
	var invalid =' ';
	var userLength = 8;
	var pwdLength = 6;
	var user = form.user.value; 
	var pwd = form.password.value; 
	
	 
	if (user == '' || pwd == '')	{
		alert('Please enter login details.');
		return false;
	} else {                                              
	
		if (user.length < userLength){
			alert('Your user name must be at least ' + userLength + ' characters long. Try again.');
			form.user.value ="";
			form.password.value ="";
			return false;
		} else if (pwd.length < pwdLength){
			alert('Your password must be at least ' + pwdLength + ' characters long. Try again.');
			form.user.value ="";
			form.password.value ="";
			return false;
		} else if (form.password.value.indexOf(invalid) > -1){
			alert('Sorry, spaces are not allowed.');
			return false;
		} else { 
			if (user != "Gayathri" && pwd != "g@y@11"){
				alert('Please enter valid login details.');
				return false;
			}
		}
	}
	return true;
};


function passwordMask() {
    if (document.getElementById('pwd').value.length != 0) {
        
    }
};

