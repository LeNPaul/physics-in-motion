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
		})

		.when('/about', {
			templateUrl: 'views/about.html'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
		});

	$locationProvider.html5Mode(true);

}]);
