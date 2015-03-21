'use strict';

var navController = angular.module("app").controller('NavController', ['$scope', '$location',
function ($scope, $location) {

		//User Functions

		$scope.logOut = function () {
		};

		$scope.getLogos = function () {
		}

		//nav links
		$scope.gotoFeed = function () {
				$location.path("/feed");
		};

}]);
