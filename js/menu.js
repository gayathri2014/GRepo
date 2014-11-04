(function() {
	var app = angular.module('menu', []);
		
	app.controller('menuController', function() {
		
		this.activeMenu = 'Feed';
		
		this.menu = [
			{'name': 'Feed'}, 
			{'name': 'Profile'}
		];
		
		this.changeMenu = function(menuName) {
			alert(menuName);
			this.activemenu = menuName;
		};
	});	
})();