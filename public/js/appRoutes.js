angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/curriculum', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/resources', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'
		});

	$locationProvider.html5Mode(true);

}]);
