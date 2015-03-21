'use strict';

var feedController = angular.module("app").controller('FeedController', ['$scope', '$route',
function ($scope, $route) {
		$scope.test = "Hello World";

		$scope.items = $route.current.locals.getItems;

}]);


feedController.getItems = function ($q, $timeout) {
  var deferred = $q.defer();

	var items = [{
		"id": 1,
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
	},

	{
		"id": 2,
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
	}
];

	deferred.resolve(items);


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
