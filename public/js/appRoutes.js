angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// Home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// Curriculum pages
		.when('/curriculum', {
			templateUrl: 'views/curriculum.html',
			controller: 'NerdController'
		})

		.when('/curriculum/motion-in-one-dimension', {
			templateUrl: 'views/curriculum/motion-in-one-dimension.html',
		})

		.when('/curriculum/simple-motion-in-one-dimension', {
			templateUrl: 'views/curriculum/simple-motion-in-one-dimension.html',
		})

		// Other pages
		.when('/resources', {
			templateUrl: 'views/resources.html',
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
