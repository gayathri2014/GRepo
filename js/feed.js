(function() {
	var app = angular.module('feed', []);
	
	app.controller('feedController', function($scope) {
		
		this.feeds = [];
		
		this.feed = {
			'id': 0,
			'type': '',
			'value': ''
		};
		this.image = {
			'logo': 'img/book-review.gif',
			'logo_size': 100,
		};
		this.strings = {
			'feed_required': 'Please enter the URL/text feed',
			'feed': 'Text feed or URL feed',
			'post': 'Post'
		};
		 $scope.pattern =new RegExp('^(https?:\\/\\/)?'+'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ '(\\?[;&a-z\\d%_.~+=3D-]*)?'+ '(\\#[-a-z\\d_]*)?$','i');
		$scope.redirectUrl = function(url) {
        if($scope.pattern.test(url)) {
            window.open("http://"+url);
        }
    }
		$scope.feeds = [];
		 var data = [];
		this.validateFeed = function() {
					$scope.feeds.push(this.feed.value);	
		};
		$scope.remove = function(index) {
				if (confirm("Are you sure that you want to delete \""+$scope.feeds[index]+"\"") == true) {
					data.push($scope.feeds.splice(index, 1)[0]);
					}
			};
			$scope.date = new Date();
	});	
	app.directive('animate', function(){
    return function(scope, elm, attrs) {
        setTimeout(function(){
            elm.addClass('show');
        });
    };
}).directive('remove', function(){
    return function(scope, elm, attrs) {
        elm.bind('click', function(e){
            e.preventDefault();
            elm.removeClass('show');
            setTimeout(function(){
                scope.$apply(function(){
                    scope.$eval(attrs.remove);
                });
            }, 200);                    
        });
    };
});


})();