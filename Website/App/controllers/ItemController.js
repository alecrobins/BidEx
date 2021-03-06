'use strict';

var itemController = angular.module("app").controller('ItemController', ['$scope', '$route', '$location', '$routeParams', 'itemService', 'loginService', 'discussionService', 'paymentService',
function ($scope, $route, $location, $routeParams, itemService, loginService, discussionService, paymentService) {

		// determines if you can order a product or not
		$scope.outcome = "Templates/winner.html";

		$scope.item = $route.current.locals.getItemById;

		$scope.currentComment = "";

		$scope.currentUser = loginService.getCurrentUser();

		$scope.paymentClass = "payment-hide";

		// place a bid on the current item
		$scope.placeBid = function () {
			//TODO: need to determine if the bid went through or not
			//TODO: need to get the current users information
			if (itemService.placeBid($scope.item, $scope.currentUser)) {
				//update the ui
				console.log("BID PLACED!!!");
			}else{
				// notify why it didn't
				console.log("~~~ DIDN'T PLACE BID");
			}

			// var promise = itemService.placeBid($scope.item, $scope.currentUser);
			//
			// promise.
			// 			success(function(data, status, headers, config) {
			// 				// update the view with a bid update
			// 			}).
			// 			error(function(data, status, headers, config) {
			// 				// called asynchronously if an error occurs
			// 				// or server returns response with an error status.
			// 			});
		}

		$scope.currentEndingTime = 	$scope.item;

		$scope.addComment = function () {
			console.log("COMMENT :: ");
			console.log($scope.currentComment);
			discussionService.addComment($scope.currentUser, $scope.currentComment, $scope.item);

			// reset
			$scope.currentComment = "";
		}

		$scope.timerFinished = function () {
			// Need to show payment
			console.log("YOU WINN");
			$location.path("/item/" + $scope.item.id + "/complete");
			$scope.$apply();
			console.log("/item/" + $scope.item.id + "/complete");

		}

		$scope.token = "";

		$scope.sendToken = function () {
			console.log($scope.token);
			paymentService.sendToken($scope.token, $scope.item);
		}

}]);

// Responses
itemController.getItemById = function($q, $timeout, $route, itemService){
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
