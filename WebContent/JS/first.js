var app= angular.module('myapp',[]);
app.controller('firstCtrl', function($scope, $http)
		{
	
	$http.get("json/first.json").success(function(response){
		$scope.info= response.ProductsList;
	})
	.error(function(){
	$scope.error="could not fetch the data";
		});
	//$scope.info=false;
	$scope.hoveritem= function(data){
	$scope.x= data;
	};
	
		});
			