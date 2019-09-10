// create the module and name it dashboardApp
var dashboardApp = angular.module('dashboardApp', []);

// create the controller and inject Angular's $scope
dashboardApp.controller('mainController', function($scope) {

  function getLessonProgress(lesson){
    return new Promise((resolve, reject) => {
      $.get("/lesson_progress/" + lesson, function(data){
        resolve(data, lesson);
      })
    })
  }

  function getDashboardData(){
    return new Promise((resolve, reject) => {
      $.get("/recent_lessons", function(lessons, status) {
        let dashboardData = [];
        for (let i=1; i < lessons.length; i++) {
          getLessonProgress(lessons[i][0]).then(data => {
            dashboardData.push(lessons[i]);
          });
        }
        resolve(dashboardData);
        //$scope.records = dashboardData;
        //$scope.$digest();
      });
    })
  }

});
