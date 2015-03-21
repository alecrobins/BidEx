'use strict';

app.service('discussionService', ['$q', '$http', '$rootScope', '$timeout', 'itemService', function ($q, $http, $rootScope, $timeout, itemService) {

	//NOTE: the twitter
	this.addComment = function(user, text){
		itemService.addComment(user, text);
	}

}]);
