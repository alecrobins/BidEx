'use strict';

var feedController = angular.module("app").controller('FeedController', ['$scope', '$route', '$location', 'loginService', 'itemService',
function ($scope, $route, $location, loginService, itemService) {

		$scope.items = $route.current.locals.getItems;

		$scope.gotoItem = function (itemId) {
			console.log(itemId);
			$location.path("/item/" + itemId);
		}

		// place a bid on the current item
		$scope.placeBid = function (item) {
			//TODO: need to determine if the bid went through or not
			//TODO: need to get the current users information
			if (itemService.placeBid(item, loginService.getCurrentUser())) {
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

		$scope.endingTime = 1451628000000;

}]);

feedController.getItems = function ($q, $timeout, itemService) {
  var deferred = $q.defer();

  // // to see if data has already been loaded
	itemService.requestItems().then(
    function() {
        //get upcoming games
        var items = itemService.getItems();
        deferred.resolve(items);
				console.log("RESOLVED!!");
    });

    return deferred.promise;
}
