// create the module and name it dashboardApp
var dashboardApp = angular.module('dashboardApp', []);

// create the controller and inject Angular's $scope
dashboardApp.controller('mainController', function($scope) {

  // Duplicate of function in noteApp.js
  function capitalizeFirstLetter(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

  function getLessonProgress(lesson){
    return new Promise((resolve, reject) => {
      $.get("/lesson_progress/" + lesson, function(data){
        resolve(data, lesson);
      })
    })
  }

  function getDashboardData(){
    $.get("/recent_lessons", function(lessons, status) {
      var lessonData = [];
      console.log(lessons);
      for (let i = 0; i < lessons.length; i++) {
        lessonData.push([
          capitalizeFirstLetter(lessons[i][0].replace(/_/g, ' ')),
          lessons[i][0].replace(/_/g, '-'),
          lessons[i][0].replace(/_/g, '-') + "#!/" + lessons[i][1].replace(/_/g, '-'),
        ]);
      }
      console.log(lessonData)
      $scope.records = lessonData;
      $scope.$digest();
    });
  }

  getDashboardData();

});
