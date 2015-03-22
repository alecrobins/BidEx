'use strict';

app.service('paymentService', ['$q', '$http', '$rootScope', '$timeout', function ($q, $http, $rootScope, $timeout) {

	var base_url = "http://128.199.142.152:8080/Spring4-1";

	this.sendToken = function (userToken, currentItem) {
		// console.log("Sending token . . .");
		// Returns a promise

		var data = {
			token: userToken
			// item: currentItem
		}
		console.log(userToken);

		console.log("Sending the post . . .");

		// $.ajax({
		//   type: "POST",
		//   url: base_url + '/data/chargeToken',
		//   data: userToken,
		//   success: function(data, status, headers, config) {
		// 		console.log("SUCESS!!!!");
		// 		console.log(data);
		// 	},
		//   dataType: "json"
		// });

	 $.ajax({
		    url: base_url + '/data/chargeToken',
		    data: userToken,
		    type: 'POST',
		    crossDomain: true, // enable this
		    dataType: 'json',
		    success: function() { console.log("SUCESS!!!!"); },
		    error: function() { alert('Failed!'); },
		    // beforeSend: setHeader
		});

	// var postConfig = {
	//     headers:  {
	//     "MYAPP-DOMAIN" : "myapp.bz",
	//     'Content-Type': 'application/json; charset=UTF-8'
	//     }
	// };
	//
	//
	// 	return $http.post(base_url + '/data/chargeToken', userToken, postConfig).
	// 			  success(function(data, status, headers, config) {
	// 			    console.log("SUCESS!!!!");
	// 					console.log(data);
	// 			  }).
	// 			  error(function(data, status, headers, config) {
	// 			    console.log("UTTER FAILURE :(");
	// 			  });
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
