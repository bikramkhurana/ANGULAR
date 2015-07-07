var app=angular.module("myApp1",[]);
app.controller("secondCtrl",function($scope,$http)
		{
	$scope.task=[];
	$http.get("../json/second.json").success(function(result)
			{
		$scope.task=result;
			});
	$scope.addTask= function(add){
		var adTask={name:add.name,
				date:add.date,
				assigned:add.assigned
				
		};
		$scope.task.push(adTask);
		
		alert($scope.task.length);
	};
	$scope.remove=function(index)
	{
		$scope.task.splice(index,1);	
	};
		});