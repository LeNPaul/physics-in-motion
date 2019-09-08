// create the module and name it dashboardApp
var dashboardApp = angular.module('dashboardApp', []);

// create the controller and inject Angular's $scope
dashboardApp.controller('mainController', function($scope) {

  function getRecentLessons(){
    return new Promise((resolve, reject) => {
      $.get("/recent_lessons", function(lessons, status) {
        resolve(lessons);
      });
    })
  }

  function getLessonProgress(lesson){
    return new Promise((resolve, reject) => {
      $.get("/lesson_progress/" + lesson, function(data){
        resolve(data, lesson);
      })
    })
  }

  getRecentLessons().then(lessons => {
    for(var i = 0; i < lessons.length; i++) {
      getLessonProgress(lessons[i][0]).then(data => {
        // Set the links and stuff
        console.log(lessons);
        // Set the lesson progress
        console.log(data);
      })
    }
  })

  $scope.records = [];

});
