// create the module and name it postApp
var postApp = angular.module('postApp', ['ngRoute']);

// configure our routes
postApp.config(function($routeProvider) {
  $routeProvider

  .when('/news-and-updates', {
    templateUrl: 'posts/news-and-updates.html',
  })

  .when('/2017-09-11-welcome-to-beta-release', {
    templateUrl: 'posts/2017-09-11-welcome-to-beta-release.html',
  })

});

// create the controller and inject Angular's $scope
postApp.controller('mainController', function($scope) {

  $scope.posts = [
    {'title': 'Welcome to the Beta Release of Physics in Motion!', 'description': 'This is only a beta release, with only a few courses created.', 'link': '2017-09-11-welcome-to-beta-release'}
  ];

});
