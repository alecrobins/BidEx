'use strict';

app.service('loginService', ['$q', '$http', '$rootScope', '$timeout', function ($q, $http, $rootScope, $timeout) {

	var base_url = "http://someurl.com"

	//TODO: need to dynamically install
	var currentUser = {
		"username": "userNumbe2",
		"bidAmount": "",
		"profile": "Assets/Images/pro2.png",
		"id": 123
	};

	this.getCurrentUser = function () {
		return currentUser;
	}

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
		return true;
	}

	this.isUserWinner = function () {
		//Assume true for the demo
		return true;
		// // Returns a promise
		// return $http.post(base_url + '/isUserWinner/', user).
		// 		  success(function(data, status, headers, config) {
		// 		    // this callback will be called asynchronously
		// 		    // when the response is available
		// 		  }).
		// 		  error(function(data, status, headers, config) {
		// 		    // called asynchronously if an error occurs
		// 		    // or server returns response with an error status.
		// 		  });
	}

}]);
