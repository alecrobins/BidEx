'use strict';

app.service('itemService', ['$q', '$http', '$rootScope', '$timeout', function ($q, $http, $rootScope, $timeout) {

	var currentItem = {};

	var currentEndingTime = 0;

	// Dummy items
	var items = [{
			"id": 1,
			"title": "One Hour Conversation with Mark Zuckerburg",
			"featureImage": "Assets/Images/filler.png",
			"currentBid": 2300,
			"numOfBidders": 12,
			"endTime":  new Date(2015, 11, 17, 13, 24, 0).getTime(),
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
			"title": "This is all about example number 2",
			"featureImage": "Assets/Images/filler2.png",
			"currentBid": 200,
			"endTime":  new Date(2015, 12, 1, 3, 25, 0).getTime(),
			"remainingTime": "0:59", // TODO: NEED TO REMOVE,
			"bidInc": 100,
			"numOfBidders": 32,
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

	var base_url = "http://someurl.com";

	this.requestItems = function () {
		console.log("Requestion items . . .");

		var deferred = $q.defer();

		//TODO: don't do an if statment - make a request each time
		//TODO: consider returning just the promise (w/o succes/error)
		// check if there are no items loaded
		if (items == []){
			// Returns a promise
			return $http.get(base_url + '/items').
						success(function(data, status, headers, config) {
							// set items to data
						}).
						error(function(data, status, headers, config) {
							// called asynchronously if an error occurs
							// or server returns response with an error status.
						});
		}else{
			//resolve
        deferred.resolve();
				console.log("RESOLVED . . .");
        return deferred.promise;
		}
	}

	this.getCurrentEndingTime = function () {
		console.log("CURRENT ENDING TIME");
		console.log(currentEndingTime);
		return currentEndingTime;
	}

	this.requestItemById = function (id) {
		var deferred = $q.defer();

			// TODO: need to implement when API is up
			// // Returns a promise of the item looked up with its id
			// return $http.get(base_url + '/item' + id).
			// 			success(function(data, status, headers, config) {
			// 				// set current
			// 			}).
			// 			error(function(data, status, headers, config) {
			// 				// called asynchronously if an error occurs
			// 				// or server returns response with an error status.
			// 			});
			//resolve

			console.log("CHECKING ...");

			//DUMMY
			if(id == 1){
				currentItem = items[0];
			}
			else if(id == 2){
				currentItem = items[1];
			}
			else
				console.log("BIG ERROR");

      deferred.resolve();
      return deferred.promise;
	}

	this.getItems = function () {
		console.log("GET EM");
		return items;
	}

	this.getCurrentItem = function () {
		console.log("Getting current item ");
		console.log(currentItem);
		return currentItem;
	}

	this.placeBid = function (item, user){
		// TODO: need to implement when API is up
		// Returns a promise of the item looked up with its id
		// return $http.get(base_url + '/placeBid/' + item.id + '/' + user.id);

		//DUMMY
		if(item.id == 1){
			console.log("BEFORE BID");
			console.log(items[0].currentBid);
			items[0].currentBid += items[0].bidInc;
			console.log("AFTER BID");
			console.log(items[0].currentBid);
			return true;
		}
		else if(item.id == 2){
			console.log("BEFORE BID");
			console.log(items[1].currentBid);
			items[1].currentBid += items[1].bidInc;
			console.log("AFTER BID");
			console.log(items[1].currentBid);
			return true;
		}
		else{
			console.log("BIG ERROR");
			return false
		}



	}


}]);
