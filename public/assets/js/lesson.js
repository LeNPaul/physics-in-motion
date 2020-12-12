var lessonData = document.querySelector("#lesson-module");
var topic = lessonData.dataset.topic;
var lesson = lessonData.dataset.lesson;

var lessonPath = topic + "." + lesson;

function updateTime() {
  $.post("/update_lesson_time", {lessonPath: lessonPath}, function(data, status) {
    // Just update the last seen time
    // TODO - add proper error handling here
  });
};

function setSavedNote() {
  $.get("/lesson_data", function(data, status) {
    document.getElementById('lessonNotes').value = data[0]["lesson_modules"][topic][lesson].notes;
  })
}

function updateNotes() {
  var notes = document.getElementById("lessonNotes").value;
  $.post("/update_lesson_notes", {lessonPath: lessonPath, notes: notes}, function(data, status) {
  });
  alert("Notes have been updated!");
}

function setLessonStatus() {
  $.get("/lesson_data", function(data, status) {
    if(status) {
      for(i = 0; i < data.length; i++) {
        if(data[i].lesson_name == lesson && data[i].module_name == topic) {
          if(data[i].status) {
            document.getElementById("lessonStatus").textContent="Complete";
          } else {
            document.getElementById("lessonStatus").textContent="Incomplete";
          }
        }
      }
    }
  });
}

function updateLessonStatus(status) {
  $.post("/update_lesson_status", {lessonPath: lessonPath, status: status}, function(data, status) {
    setLessonStatus()
  });
}

if(document.getElementById("lessonStatus")) {
  updateTime();
  setLessonStatus();
  // setSavedNote();
  // TODO - will need to update endpoints relating to user notes
}
