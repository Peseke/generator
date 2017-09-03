var app = angular.module('myApp', ['ngSanitize']);
app.controller('myCtrl', function($scope) {
			$scope.firstName = "John";
			$scope.lastName = "Pinky";
			$scope.message = "its working";
});
