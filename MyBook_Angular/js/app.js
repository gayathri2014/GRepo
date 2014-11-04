(function() {
	var angularApp = angular.module('app',['directives', 'menu', 'feed', 'profile']);

	angularApp.factory('loginFactory',[
		function  (){
			return {
				"username": "",
				"password": "",
				"profileImage": "img/no-image.jpg"
			};
		}
	]);

	
	angularApp.controller('loginController',['$scope','$rootScope','loginFactory',function($scope,$rootScope,loginFactory){
		
		$scope.model = loginFactory;
		$scope.validLogin = false;
		$scope.islogin = false;
		$scope.isFeed = false;
		$scope.isProfile = false;

		$scope.pages = [{'name':'page1','url':'views/login.html'},{'name':'page2','url':'views/feed.html'}];
		$rootScope.page = $scope.pages[0];

		$scope.validateLogin = function() {
			if ($scope.model.username && $scope.model.password) {
				if($scope.model.username === 'admin' && $scope.model.password === "admin") {
					$scope.validLogin = true;
					$scope.islogin = true;
					$scope.validationError ="";
					$rootScope.page = $scope.pages[1];
				} else {
					$scope.validationError = "Please enter valid Username and password.";
				}
			} else {
				$scope.validationError = "Please enter Username and password.";
			}
		};
		
		$scope.logout = function() {
			$scope.islogin = false;
			$rootScope.page = $scope.pages[0];
			$scope.model = loginFactory;
		};
	
	}]);
})();





