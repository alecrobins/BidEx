'use strict';

var completeController = angular.module("app").controller('CompleteController', ['$scope', '$route', '$http', 'paymentService',
function ($scope, $route, $http, paymentService) {

		$scope.item = $route.current.locals.getItemById;

	  var masterPassResponseHandler = function (data, status) {
	      var $paymentForm = $("#simplify-payment-form");
	      console.log("Master pass resonse returned");
	      // Remove all previous errors
	      $(".error").remove();
	      // Check for errors
	      if (data.error) {
	          // Show any validation errors
	          if (data.error.code == "validation") {
	              var fieldErrors = data.error.fieldErrors,
	                  fieldErrorsLength = fieldErrors.length,
	                  errorList = "";
	              for (var i = 0; i < fieldErrorsLength; i++) {
	                  errorList += "<div class='error'>Field: '" + fieldErrors[i].field +
	                               "' is invalid - " + fieldErrors[i].message + "</div>";
	              }
	              // Display the errors
	              $paymentForm.after(errorList);
	          }
	      } else {
	          // The token contains id, last4, and card type
	          var token = data["id"];

	          console.log("I RECIEVED THE TOKEN");

	          // Insert the token into the form so it gets submitted to the server
	          $paymentForm.append("<input type='hidden' name='simplifyToken' value='" + token + "' />");
	          // Submit the form to the server
	          $paymentForm.get(0).submit();

	      }

	  }

		var sendToken = function (token, item) {
			paymentService.sendToken(token, item);
		}

	  var masterPassCanceledHandler = function () {
	    console.log ("MasterPass canceled")
	  }

	  var simplifyResponseHandler = function(data, status) {
	    console.log("SIMPLE RETURNED");

			sendToken(data, $scope.item);

	  }

		$("#simplify-payment-form").on("submit", function() {
				// Disable the submit button
				$("#process-payment-btn").attr("disabled", "disabled");
				// Generate a card token & handle the response
				SimplifyCommerce.generateToken({
						key: "sbpb_OGJiN2FhZWMtODI2Zi00MTc3LTkzMjYtMjJkMzc3YTAwYThj",
						card: {
								number: $("#cc-number").val(),
								cvc: $("#cc-cvc").val(),
								expMonth: $("#cc-exp-month").val(),
								expYear: $("#cc-exp-year").val()
						}
				}, simplifyResponseHandler);
				// Prevent the form from submitting
				return false;
		});

		SimplifyCommerce.addMasterPassCheckoutButton("buy-with-masterpass-div", "sbpb_OGJiN2FhZWMtODI2Zi00MTc3LTkzMjYtMjJkMzc3YTAwYThj", masterPassResponseHandler,
		      masterPassCanceledHandler);

		var testData = {
			"id": "admin",
			"password": "admin"
		}

		$scope.test = function () {
			$.ajax({
		    headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    	},
		    'type': 'POST',
		    'url': 'http://128.199.142.152:8080/Spring4-1/data/login',
		    'data': testData,
		    'dataType': 'json',
		    'success': function() {console.log("Last one for the books");}
		    });
		}

}]);

// Responses
completeController.getItemById = function($q, $timeout, $route, itemService){
	var deferred = $q.defer();
	var itemItd = $route.current.params.id;
	console.log("PARAM:");
	console.log(itemItd);

	// // to see if data has already been loaded
	itemService.requestItemById(itemItd).then(
		function() {
				//get upcoming games
				var item = itemService.getCurrentItem();
				deferred.resolve(item);
				console.log("item retrieved");
		});

		return deferred.promise;
}
