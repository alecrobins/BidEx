'use strict';

var feedController = angular.module("app").controller('FeedController', ['$scope', '$route', '$location',
function ($scope, $route, $location) {

		$scope.items = $route.current.locals.getItems;

		$scope.gotoItem = function (itemId) {
			console.log(itemId);
			$location.path("/item/" + itemId);
		}

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
