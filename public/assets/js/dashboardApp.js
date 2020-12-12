// create the module and name it dashboardApp
var dashboardApp = angular.module('dashboardApp', []);

// create the controller and inject Angular's $scope
dashboardApp.controller('mainController', function($scope) {

  // If user marked account for delete then warn them
  $.get("/userinfo", function(data, status) {
    if (data.mark_deleted != undefined) {
      $scope.mark_deleted = data.mark_deleted;
      document.getElementById('alertDeleted').style.display = 'block'
      $scope.$digest();
    }
  });

  $scope.undoDelete = function() {
    $.post("/update_userinfo", {mark_deleted: ""}, function(data, status) {});
    location.reload();
  }

  // Duplicate of function in noteApp.js
  function capitalizeFirstLetter(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

  // Duplicate of postApp.js
  $scope.posts = [
    {'title': 'Welcome to the First Release of Physics in Motion!', 'description': 'This is now the official first release of Physics in Motion! Stay tuned for more to come!', 'link': '2020-11-09-welcome-to-first-release'},
    {'title': 'Welcome to the Beta Release of Physics in Motion!', 'description': 'This is only a beta release, with only a few courses created.', 'link': '2020-04-25-welcome-to-beta-release'},
    {'title': 'Updates to our Terms and Privacy', 'description': 'We have recently updated our Terms and Privacy pages.', 'link': '2020-01-05-updates-to-terms-and-privacy'}
  ];

  // Temporary solution
  function getLessonDescription(lessonName) {
    lessonName = lessonName.toLowerCase();
    switch(lessonName) {
      case "motion_in_one_dimension":
        return "To learn how objects move through space, we need to start with the simplest case: motion in one dimenion."
        break
      case "motion_in_two_dimensions":
        return "With our understanding of motion in one dimension, we explore motion in two dimensions."
        break
      case "forces_and_the_laws_of_motion":
        return "The phenomena and laws that affect the motion of objects through space, and how to predict motion."
        break
      case "circular_motion":
        return "A special case of applying the Laws of Motion for a common occurance in real life."
        break
      case "work_and_energy":
        return "The phenoma that makes things move, and is what makes the universe run at all scales."
        break
      case "linear_momentum_and_collisions":
        return "An object in motion will stay in motion unless acted on by an external force - such as a collision."
        break
      case "rotational_motion_and_angular_momentum":
        return "How objects behave when they are rotating on an axis, such as wheels or spinning tops."
        break
      case "oscillations":
        return "How objects behave when they are moving back and forth, such as a person swinging on a swing."
        break
      case "waves_and_sounds":
        return "The phenoma of many objects oscillating at the save time, such as ocean waves and sound waves."
        break
      case "electricity_and_magnetism":
        return "Develop an understanding of a phenoma that allows our society to function that we often take for granted."
        break
      case "fluid_mechanics":
        return "Develop an understanding of how fluids behave and how it allows our society to function."
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
            capitalizeFirstLetter(lessons[i].module_name.replace(/_/g, ' ')),
            lessons[i].module_name.replace(/_/g, '-'),
            lessons[i].module_name.replace(/_/g, '-') + "#!/" + lessons[i].lesson_name.replace(/_/g, '-'),
            lessons[i].module_name,
            getLessonDescription(lessons[i].module_name)
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
    //setLessonProgress();
  })

});
