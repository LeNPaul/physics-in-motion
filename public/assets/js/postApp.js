// create the module and name it postApp
var postApp = angular.module('postApp', ['ngRoute']);

// configure our routes
postApp.config(function($routeProvider) {
  $routeProvider
  .when('/2017-09-11-welcome-to-beta-release', {
    templateUrl: 'posts/2017-09-11-welcome-to-beta-release.html',
  })
});

// create the controller and inject Angular's $scope
postApp.controller('mainController', function($scope) {

});
