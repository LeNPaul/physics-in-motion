// create the module and name it noteApp
var noteApp = angular.module('settingsApp', []);

// create the controller and inject Angular's $scope
noteApp.controller('mainController', function($scope, $window) {

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
