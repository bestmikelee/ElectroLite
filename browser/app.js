var app = angular.module('myApp',['ui.router']);

app.controller('myCtrl', function($scope){
    //

	$scope.users = [];
	$scope.getUsers = function(){
        User.findAll({}).then(function(users){
        	$scope.users = users;
            $scope.$digest();
        });
    }


	$scope.insertInto = function(){
		User.create({
			username: $scope.insertText,
		    birthday: new Date(2015, 6, 20)
		}).then(function(user){
			$scope.getUsers();
			return;
		})
	}
	$scope.deleteAllUsers = function(){
		User.destroy({where: {id: {$gt: 0}}});
        $scope.getUsers();
	}
})
