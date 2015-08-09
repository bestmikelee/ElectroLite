var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope){
	
	User.findAll({}).then(function(users){
		$scope.users = users;
	});

	$scope.test = "great things"
	
	$scope.sendToDB = function (){
		sequelize.sync().then(function() {
		  return User.create({
		    username: $scope.texting,
		    birthday: new Date(1980, 6, 20)
		  });
		}).then(function(user) {
		  $scope.users.push(user)
		});
	}
	$scope.deleteAllUsers = function(){
		User.destroy({where: {id: {$gt: 0}}});
		$scope.users = [];
	}
})