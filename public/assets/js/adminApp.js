// create the module and name it noteApp
var adminApp = angular.module('adminApp', []);

// create the controller and inject Angular's $scope
adminApp.controller('mainController', function($scope) {

  $.get('/user_list?page=0&limit=10', function(data, status) {
    $scope.Users = data;
    $scope.$digest();
  });

  $scope.deleteUser = function(username) {
    let isDelete = confirm("Are you sure you would like to delete this account? This is not reversable.");
    if ( isDelete ) {
      $.post("/delete_user", {user: username}, function(data, status) {
        // Delete user and reload the page
        // TODO - add proper error handling here
        location.reload();
      });
    }
  }

  $.get('/questions', function(data, status) {
    $scope.Questions = data;
    $scope.$digest();
  });

  $scope.getQuiz = function() {
    var question_id = document.head.querySelector("[name~=question_id][content]").content;
    $.get('/question/' + question_id, function(data, status) {
      $scope.questionText = data.question_text;
      $scope.$digest();
    });
  }

});
