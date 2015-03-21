'use strict';

app.service('discussionService', ['$q', '$http', '$rootScope', '$timeout', 'itemService', function ($q, $http, $rootScope, $timeout, itemService) {
	var base_url = "http://someurl.com";

	//NOTE: the twitter
	this.addComment = function(user, text, item){

		itemService.addComment(user, text);
		//TODO: need to add once API is up
		// $http.get(base_url + '/addComment/' + user.id + '/' + item.id + '/' + text).
		// 		success(function(data, status, headers, config) {
		// 			// update the service comments
		// 			// NOTE: MAY ADD DOUBLE COMMENTS
		// 			itemService.addComment(user, text);
		// 		}).
		// 		error(function(data, status, headers, config) {
		// 			console.log("ERROR - problem uploading user comment to DB");
		// 		});
	}

}]);
