(function() {
	var app = angular.module('profile', []);
	
	app.controller('profileController', ['loginFactory', function(loginFactory) {
		
		this.profileSaved = false;
		
		this.strings = {
			'name': 'Name',
			'name_required': 'Please enter the name',
			'age': 'Age',
			'age_required': 'Please enter the age',
			'phone': 'Phone',
			'phone_required': 'Please enter the phone',
			'email': 'Email',
			'email_required': 'Please enter the email',
			'address': 'Address',
			'address_required': 'Please enter the address',
			'save': 'Save'
		};
		
		this.profile = {
			'name': '',
			'age': '0',
			'phone': '',
			'email': '',
			'address': '',
			'image': ''
		};
		
		this.profile.image = loginFactory.profileImage;
		
		this.validateProfile = function() {			
			loginFactory.profileImage = this.profile.image;
			this.profileSaved = true;
		};
	}]);	
})();