var app=angular.module("myApp1",[]);
app.controller("secondCtrl",function($scope,$http)
		{
	$scope.task=[];
	
	$http.get("../json/second.json").success(function(result)
			{
		$scope.task=result;
			}),
	error(function(){
		$scope.error="Sorry Due to technical difficulties page can't load,So try again later";
			});
	$scope.addTask= function(add){
		var adTask={name:add.name,
				date:add.date,
				assigned:add.assigned
				
		};
		$scope.task.push(adTask);
		
		alert($scope.task.length);
	};
	$scope.removeTask=[];
	$scope.remove=function()
	{
		//console.log(index);
	$scope.data= $scope.task.splice(index,1);
	console.log($scope.data);
		$scope.removeTask.push();
	};
		});