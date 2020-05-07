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

  $scope.updateQuizAnswers = function() {
    var quizQuestion = document.getElementById('questionText');
    if (quizQuestion.value != '') {
      var questionId = document.getElementById('questionId');
      $.post('/question', {question_id: questionId.textContent.split(' ')[1], question_text: quizQuestion.value}, function(data, status) {
        location.reload();
      });
    }
    var quizAnswers = document.getElementById('answerForm');
    for (var i=0; i < quizAnswers.length; i++) {
      if (quizAnswers[i].value) {
        $.post('/answer', {answer_id: quizAnswers[i].placeholder.split(' - ')[1], answer_text: quizAnswers[i].value}, function(data, status) {
          location.reload();
        });
      }
    }
  }
});
