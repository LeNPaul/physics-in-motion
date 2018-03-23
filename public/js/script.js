// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

  .when('/motion-in-one-dimension', {
    templateUrl: 'curriculum/motion-in-one-dimension.html',
  })
  .when('/simple-motion-in-one-dimension', {
    templateUrl: 'curriculum/simple-motion-in-one-dimension.html',
  })
  .when('/simple-motion-in-two-dimensions', {
    templateUrl: 'curriculum/simple-motion-in-two-dimensions.html',
  })
  .when('/motion-in-two-dimensions', {
    templateUrl: 'curriculum/motion-in-two-dimensions.html',
  })

});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

  // Render LaTex when loading new view
	$scope.$watch(function(){
	  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	  return true;
	});

});

scotchApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
