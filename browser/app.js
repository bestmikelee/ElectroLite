var app = angular.module('myApp',['ui.router']);

app.controller('myCtrl', function($scope){

	User.findAll({}).then(function(users){
		$scope.users = users;
	});

	$scope.test = "Scope Test"


	$scope.insertInto = function(){
		User.create({
			username: $scope.insertText,
		    birthday: new Date(2015, 6, 20)
		}).then(function(user){
			$scope.users.push(user);
			$scope.$digest();
			return;
		})
	}
	$scope.deleteAllUsers = function(){
		User.destroy({where: {id: {$gt: 0}}});
		$scope.users = [];
	}
})
