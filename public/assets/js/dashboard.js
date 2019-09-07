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

setLatestLesson();
setLessonProgress();
