'use strict';

app.service('loginService', ['$q', '$http', '$rootScope', '$timeout', function ($q, $http, $rootScope, $timeout) {

	var base_url = "http://someurl.com"

	this.createNewUser = function (newUser) {
		console.log("Creating user . . .");

		// Returns a promise
		return $http.post(base_url + '/createUser', newUser).
				  success(function(data, status, headers, config) {
				    // this callback will be called asynchronously
				    // when the response is available
				  }).
				  error(function(data, status, headers, config) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				  });
	}

	this.signInUser = function (user) {
		console.log("Signing in user . . .");

		// Returns a promise
		return $http.post(base_url + '/signIn', user).
				  success(function(data, status, headers, config) {
				    // this callback will be called asynchronously
				    // when the response is available
				  }).
				  error(function(data, status, headers, config) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				  });
	}

	this.isUserLoggedIn = function () {
		return false; 
	}

}]);
