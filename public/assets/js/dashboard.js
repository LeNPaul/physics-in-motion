var username = document.head.querySelector("[name~=username][content]").content;

function setLatestLesson() {
  $.post("/get_lessons", {username: username}, function(data, status) {
    var link = document.getElementById("latest-lesson");
    link.setAttribute('href', data[0][0]);
  });
};

setLatestLesson();
