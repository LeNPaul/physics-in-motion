function setLatestLesson() {
  $.post("/get_lessons", {}, function(data, status) {
    var link = document.getElementById("latest-lesson");
    link.setAttribute('href', data[0][0]);
  });
};

// Important article: https://blog.maximerouiller.com/post/ajax-requests-in-a-loop-and-other-scoping-problems-with-javascript/
function setLessonProgress() {
  const demoClass = document.getElementsByClassName('progress-bar');
  for (var i = 0; i < demoClass.length; i++) {
    let lessonId = demoClass[i].id;
    let lesson = lessonId.split("-");
    $.post("/get_lesson_progress", {lesson: lesson[1]}, function(data, status) {
      var percentage = data.progress * 100
      document.getElementById(lessonId).setAttribute("style", "width: " + percentage + "%;");
    })
  };
};

setLatestLesson();
setLessonProgress();
