// create the module and name it dashboardApp
var dashboardApp = angular.module('dashboardApp', []);

// create the controller and inject Angular's $scope
dashboardApp.controller('mainController', function($scope) {

  $.get("/recent_lessons", function(data, status) {
    $scope.records = data;
    $scope.$digest();
  });

});
