'use strict';

var itemController = angular.module("app").controller('ItemController', ['$scope', '$route', '$routeParams', 'itemService', 'loginService',
function ($scope, $route, $routeParams, itemService, loginService) {

		$scope.test = "Hello World - item";

		$scope.item = $route.current.locals.getItemById;

		$scope.currentUser = loginService.getCurrentUser();

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

		$scope.currentEndingTime = 	$scope.item.endTime;

}]);

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
