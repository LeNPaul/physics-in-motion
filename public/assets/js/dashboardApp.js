// create the module and name it dashboardApp
var dashboardApp = angular.module('dashboardApp', []);

// create the controller and inject Angular's $scope
dashboardApp.controller('mainController', function($scope) {

  // Duplicate of function in noteApp.js
  function capitalizeFirstLetter(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

  // Temporary solution
  function getLessonDescription(lessonName) {
    lessonName = lessonName.toLowerCase();
    switch(lessonName) {
      case "kinematics":
        return "How things move though space. Learn how point objects move though both one-dimensional space, and two-dimensional space."
        break
      case "forces":
        return "What causes things to move through space. Learn about the phenomena that affects the motion of objects through space."
        break
      case "energy":
        return "The 'thing' that does work on an object. It makes things move, and is what makes the universe run at all scales, from the quantum to the astronomical."
        break
      case "momentum":
        return "Momentum is what keeps an avalanche roll once it has been set off - once moving, it takes a large external force to stop!"
        break
      case "simple_harmonic_motion":
        return "Anytime there is something moving back and forth repeatedly in a consisten pattern, you have simple harmonic motion. Think of a pendulum."
        break
      case "waves":
        return "What happens when you have a system of objects interacting with each other through simple harmonic motion? You have waves."
        break
      case "fluids":
        return "Different from point objects - think of so many point objects that they blend into one system known as a fluid. Or, you can just think about water."
        break
    }
  }

  function setLatestLesson() {
    $.get("/recent_lessons", function(data, status) {
      var link = document.getElementById("latest-lesson");
      link.setAttribute('href', (data[0][0] + "#!/" + data[0][1]).replace(/_/g, "-"));
    });
  };

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
            lessons[i][0],
            getLessonDescription(lessons[i][0])
          ]);
        }
        $scope.records = lessonData;
        $scope.$digest();
        resolve(lessonData);
      });
    })
  }

  setLatestLesson();
  getDashboardData().then(function(value){
    setLessonProgress();
  })

});
