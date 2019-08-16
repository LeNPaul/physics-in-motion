// create the module and name it scotchApp
var noteApp = angular.module('noteApp', ['ngRoute']);

// configure our routes
noteApp.config(function($routeProvider) {
  $routeProvider

  // Initial page that is rendered when AngularJS route takes over
  .when('/', {
    templateUrl: 'curriculum/start.html',
  })

  // Kinematics
  .when('/test', {
    templateUrl: 'pages/lesson.html',
  })

});

// create the controller and inject Angular's $scope
noteApp.controller('mainController', function($scope) {

  // Render LaTex when loading new view
	$scope.$watch(function(){
	  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	  return true;
	});

});

noteApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
