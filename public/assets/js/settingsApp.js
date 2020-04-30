// create the module and name it noteApp
var noteApp = angular.module('settingsApp', []);

// create the controller and inject Angular's $scope
noteApp.controller('mainController', function($scope, $window) {

  // Populate user information as placeholder text
  // When pressing update, get form data that has been filled and make request to backend

  $scope.getUserInfo = function() {
    $.get("/userinfo", function(data, status) {
      $scope.username = data.username;
      $scope.email = data.email;
      $scope.name = data.name;
      $scope.gender = data.gender;
      $scope.birthdate = data.birthdate;
      $scope.address = data.address;
      $scope.$digest();
    });
  }

  // Get user information and update form
  $scope.getUserInfo();

  $scope.updateUserInfo = function() {
    
  }

  $scope.deleteUser = function() {
    let isDelete = confirm("Are you sure you would like to delete your account? This is not reversable.");
    if ( isDelete ) {
      var username = $('#username').text();
      $.post("/delete_user", {user: username}, function(data, status) {
        // Delete user and reload the page
        // TODO - add proper error handling here
        $window.location.href = '/';
      });
    }
  }

});
