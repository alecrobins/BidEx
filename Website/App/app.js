'use strict';
//TODO: function that
var login = angular.module('LoginCheck', []).
factory('$logincheck', function () {
    return function () {
        return false;
    };
});

// Create the app
var app = angular.module('arenaApp', ['LoginCheck', 'ngRoute', 'ngAnimate']);

// Configure the routes
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // route for the discover page
        .when('/login', {
            templateUrl: 'Templates/login.html',
            controller: 'LoginController',
            // resolve: {
            //   checkLogIn: loginController.checkLogIn
            // }
        })

        // route for the feed page
        .when('/feed', {
            templateUrl: 'Templates/feed.html',
            controller: 'FeedController',
        })

				// route for the item page
        .when('/item', {
            templateUrl: 'Templates/item.html',
            controller: 'ItemController',
        })

				// route for the specific item page page
				// TODO: need to route the specific item (deal) id with this page
        .when('/item/:id', {
            templateUrl: 'Templates/item.html',
            controller: 'ItemController',
        })

				// The completed page for an item
        .when('/item/:id/complete', {
            templateUrl: 'Templates/item.html',
            controller: 'ItemController',
        })

        .otherwise({
            redirectTo: '/feed',
        });


}]).
  run(function ($rootScope, $logincheck, $location) {
      $rootScope.$on("$locationChangeStart", function (event, next, current) {
        //on any route change if user is not logged in then go to log in
        console.log("Starting the check for login . . . ");

				//TODO: check for user log in . . .

				// if (!$logincheck()) {
        //     console.log("NOT LOGGED IN");
        //     $location.path('/login');
        // }
    });
});
