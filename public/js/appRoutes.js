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

		// Kinematics
		.when('/curriculum/motion-in-one-dimension', {
			templateUrl: 'views/curriculum/motion-in-one-dimension.html',
		})
		.when('/curriculum/simple-motion-in-one-dimension', {
			templateUrl: 'views/curriculum/simple-motion-in-one-dimension.html',
		})
		.when('/curriculum/simple-motion-in-two-dimensions', {
			templateUrl: 'views/curriculum/simple-motion-in-two-dimensions.html',
		})
		.when('/curriculum/motion-in-two-dimensions', {
			templateUrl: 'views/curriculum/motion-in-two-dimensions.html',
		})

		// Forces
		.when('/curriculum/newtons-laws', {
			templateUrl: 'views/curriculum/newtons-laws.html',
		})
		.when('/curriculum/simple-forces', {
			templateUrl: 'views/curriculum/simple-forces.html',
		})
		.when('/curriculum/friction-drag', {
			templateUrl: 'views/curriculum/friction-drag.html',
		})

		// Energy
		.when('/curriculum/conservative-forces', {
			templateUrl: 'views/curriculum/conservative-forces.html',
		})
		.when('/curriculum/energy-conservation-work', {
			templateUrl: 'views/curriculum/energy-conservation-work.html',
		})
		.when('/curriculum/work-potential-energy', {
			templateUrl: 'views/curriculum/work-potential-energy.html',
		})
		.when('/curriculum/power', {
			templateUrl: 'views/curriculum/power.html',
		})

		// Momentum
		.when('/curriculum/momentum-conservation', {
			templateUrl: 'views/curriculum/momentum-conservation.html',
		})
		.when('/curriculum/elastic-collisions', {
			templateUrl: 'views/curriculum/elastic-collisions.html',
		})
		.when('/curriculum/explosions', {
			templateUrl: 'views/curriculum/explosions.html',
		})

		// Simple harmonic motion
		.when('/curriculum/dynamics-simple-harmonic-motion', {
			templateUrl: 'views/curriculum/dynamics-simple-harmonic-motion.html',
		})
		.when('/curriculum/the-pendulum', {
			templateUrl: 'views/curriculum/the-pendulum.html',
		})
		.when('/curriculum/damped-harmonic-motion', {
			templateUrl: 'views/curriculum/damped-harmonic-motion.html',
		})
		.when('/curriculum/driven-oscillations', {
			templateUrl: 'views/curriculum/driven-oscillations.html',
		})

		// Waves
		.when('/curriculum/characteristics-waves', {
			templateUrl: 'views/curriculum/characteristics-waves.html',
		})
		.when('/curriculum/superposition-of-waves', {
			templateUrl: 'views/curriculum/superposition-of-waves.html',
		})
		.when('/curriculum/interference', {
			templateUrl: 'views/curriculum/interference.html',
		})

		// Fluids
		.when('/curriculum/pressure', {
			templateUrl: 'views/curriculum/pressure.html',
		})
		.when('/curriculum/incompressible-fluids', {
			templateUrl: 'views/curriculum/incompressible-fluids.html',
		})
		.when('/curriculum/buoyancy', {
			templateUrl: 'views/curriculum/buoyancy.html',
		})
		.when('/curriculum/continuity', {
			templateUrl: 'views/curriculum/continuity.html',
		})
		.when('/curriculum/fluid-statics', {
			templateUrl: 'views/curriculum/fluid-statics.html',
		})
		.when('/curriculum/fluid-dynamics', {
			templateUrl: 'views/curriculum/fluid-dynamics.html',
		})

		// Mathematics
		.when('/curriculum/mathematics-calculus', {
			templateUrl: 'views/curriculum/mathematics-calculus.html',
		})
		.when('/curriculum/mathematics-trigonometry', {
			templateUrl: 'views/curriculum/mathematics-trigonometry.html',
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
