'use strict';

var itemController = angular.module("app").controller('ItemController', ['$scope', '$route', '$routeParams',
function ($scope, $route, $routeParams) {

		$scope.test = "Hello World - item";

		$scope.item = $route.current.locals.getItemById;

		$scope.currentUser = {
			"username": "userNumbe2",
			"bidAmount": "",
			"profile": "Assets/Images/pro2.png"
		};

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


itemController.getItem = function ($q, $timeout) {
  var deferred = $q.defer();

	var item = {
		"title": "One Hour Conversation with Mark Zuckerburg",
		"featureImage": "Assets/Images/filler.png",
		"currentBid": 2300,
		"endTime": "", // TODO: need to fill with a datetime
		"remainingTime": "0:59", // TODO: NEED TO REMOVE,
		"bidInc": 100,
		"topBidder": {
			"username": "alecrobins",
			"profile": "Assets/Images/pro1.png"
		},
		"comments": [
			{
				"user": {
					"username": "exampleUser",
					"bidAmount": 2200,
					"profile": "Assets/Images/pro1.png"
				},
				"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus lacus, viverra in pellentesque et, faucibu."
			},
			{
				"user": {
					"username": "userNumbe2",
					"bidAmount": "",
					"profile": "Assets/Images/pro2.png"
				},
				"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus lacus, viverra in pellentesque et, faucibu."
			}
		],
		"bidHistory": [
			{
				"user": {
					"username": "exampleUser",
					"profile": "Assets/Images/pro1.png"
				},
				"bidAmount": 2200
			},
			{
				"user": {
					"username": "userNumbe2",
					"profile": "Assets/Images/pro2.png"
				},
				"bidAmount": 2100
			}
		]
	};

	deferred.resolve(item);


  // //TODO: before calling the game service need to check the cache
  // // to see if data has already been loaded
  // gameService.getUpcomingGames().then(
  //   function() {
  //       //get upcoming games
  //       var upcomingGames = gameService.upcomingGames();
  //       deferred.resolve( upcomingGames );
  //   });

    return deferred.promise;
}
