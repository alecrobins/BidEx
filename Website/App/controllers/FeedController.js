'use strict';

var feedController = angular.module("app").controller('FeedController', ['$scope',
function ($scope) {
		$scope.test = "Hello World";
}]);

feedController.upcomingGames = function ($q, $timeout, gameService) {
  //   var deferred = $q.defer();
	//
  // //TODO: before calling the game service need to check the cache
  // // to see if data has already been loaded
  // gameService.getUpcomingGames().then(
  //   function() {
  //       //get upcoming games
  //       var upcomingGames = gameService.upcomingGames();
  //       deferred.resolve( upcomingGames );
  //   });
	//
  //   return deferred.promise;
}

feedController.userPicks = function ($q, $timeout, gamePicksService) {
  // var deferred = $q.defer();
	//
  //   gamePicksService.loadUserPicks().then(function(){
  //       var userPicks = gamePicksService.getGidToHomeAway();
  //       deferred.resolve( userPicks );
  //   });
	//
  //   return deferred.promise;
}
