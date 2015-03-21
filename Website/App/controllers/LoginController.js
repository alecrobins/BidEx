'use strict';

var loginController = angular.module("app").controller('LoginController', ['$scope', 'loginService',
function ($scope, loginService) {

	$scope.newUser = {
		"name": "",
		"password": "",
		"email": ""
	};

	$scope.user = {
		"user": "",
		"password": ""
	}

	$scope.reset = function () {
		// reset the scope
		$scope.newUser = {
			"name": "",
			"password": "",
			"email": ""
		};
	}

	// create a new user
	$scope.create = function(newUser) {
		//NOTE: this should be a callback
		loginService.createNewUser(newUser).then(function(){
			checkIfLoggedIn();
		});
	}

	// signin a  user
	$scope.signin = function(user) {
		//NOTE: this should be a callback
		loginService.signin(user);
	}

	function checkIfLoggedIn() {
		if(loginService.isUserLoggedIn)
			$location.path("/feed");
		else
			console.log("USER NOT LOGGED IN . .. "); // TODO: notify user
	}

}]);
