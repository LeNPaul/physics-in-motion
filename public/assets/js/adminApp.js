// create the module and name it noteApp
var noteApp = angular.module('adminApp', []);

// create the controller and inject Angular's $scope
noteApp.controller('mainController', function($scope) {

  $.get('/user_list?page=0&limit=10', function(data, status) {
    $scope.Users = data;
    $scope.$digest();
  });

});
