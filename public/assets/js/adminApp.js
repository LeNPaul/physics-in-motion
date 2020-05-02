// create the module and name it noteApp
var noteApp = angular.module('adminApp', []);

// create the controller and inject Angular's $scope
noteApp.controller('mainController', function($scope) {

  $.get('/user_list?page=0&limit=10', function(data, status) {
    $scope.Users = data;
    $scope.$digest();
  });

  $scope.deleteUser = function(username) {
    $.post("/delete_user", {user: username}, function(data, status) {
      // Delete user and reload the page
      // TODO - add proper error handling here
      location.reload();
    });
  }

  $.get('/questions', function(data, status) {
    $scope.Questions = data;
    $scope.$digest();
  });

});
