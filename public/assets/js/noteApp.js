// create the module and name it scotchApp
var noteApp = angular.module('noteApp', []);

// create the controller and inject Angular's $scope
noteApp.controller('mainController', function($scope) {

  // Render LaTex when loading new view
	$scope.$watch(function(){
	  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	  return true;
	});

	var lesson = document.head.querySelector("[name~=course][content]").content;

  $.get("/notes/" + lesson + "/data", function(data, status) {
    var information = []
    for (const [name, lesson] of Object.entries(data)) {
      information.push({name: name, notes: lesson.notes});
    }
    $scope.TopicNames = information
    $scope.$digest();
  });
});
