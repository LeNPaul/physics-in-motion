// create the module and name it dashboardApp
var dashboardApp = angular.module('dashboardApp', []);

// create the controller and inject Angular's $scope
dashboardApp.controller('mainController', function($scope) {

  // Duplicate of function in noteApp.js
  function capitalizeFirstLetter(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

  // Important article: https://blog.maximerouiller.com/post/ajax-requests-in-a-loop-and-other-scoping-problems-with-javascript/
  function setLessonProgress() {
    const demoClass = document.getElementsByClassName('progress-bar');
    for (var i = 0; i < demoClass.length; i++) {
      let lessonId = demoClass[i].id;
      let lesson = lessonId.split("-");
      $.get("/lesson_progress/" + lesson[1], function(data, status) {
        var percentage = data.progress * 100
        document.getElementById(lessonId).setAttribute("style", "width: " + percentage + "%;");
      })
    };
  };

  function getDashboardData(){
    return new Promise((resolve, reject) => {
      $.get("/recent_lessons", function(lessons, status) {
        var lessonData = [];
        for (let i = 0; i < lessons.length; i++) {
          lessonData.push([
            capitalizeFirstLetter(lessons[i][0].replace(/_/g, ' ')),
            lessons[i][0].replace(/_/g, '-'),
            lessons[i][0].replace(/_/g, '-') + "#!/" + lessons[i][1].replace(/_/g, '-'),
            lessons[i][0]
          ]);
        }
        $scope.records = lessonData;
        $scope.$digest();
        resolve(lessonData);
      });
    })
  }

  getDashboardData().then(function(value){
    setLessonProgress();
  })

});
