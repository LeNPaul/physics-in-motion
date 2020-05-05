// create the module and name it noteApp
var adminQuizApp = angular.module('adminQuizApp', []);

// create the controller and inject Angular's $scope
adminQuizApp.controller('mainController', function($scope) {

  var question_id = document.head.querySelector("[name~=question_id][content]").content;

  $.get('/question/' + question_id, function(data, status) {
    $scope.questionText = data.question_text;
    $scope.$digest();
  });

  $.get('/answers/' + question_id, function(data, status) {
    $scope.Answers = data;
    $scope.$digest();
  });

});
