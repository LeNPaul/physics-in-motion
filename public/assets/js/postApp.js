// create the module and name it postApp
var postApp = angular.module('postApp', ['ngRoute']);

// configure our routes
postApp.config(function($routeProvider) {
  $routeProvider

  .when('/news-and-updates', {
    templateUrl: 'posts/news-and-updates.html',
  })

  .when('/2020-01-05-updates-to-terms-and-privacy', {
    templateUrl: 'posts/2020-01-05-updates-to-terms-and-privacy.html',
  })

  .when('/2020-04-25-welcome-to-beta-release', {
    templateUrl: 'posts/2020-04-25-welcome-to-beta-release.html',
  })

});

// create the controller and inject Angular's $scope
postApp.controller('mainController', function($scope) {

  $scope.posts = [
    {'title': 'Welcome to the Beta Release of Physics in Motion!', 'description': 'This is only a beta release, with only a few courses created.', 'link': '2020-04-25-welcome-to-beta-release'},
    {'title': 'Updates to our Terms and Privacy', 'description': 'We have recently updated our Terms and Privacy pages.', 'link': '2020-01-05-updates-to-terms-and-privacy'}
  ];

});
