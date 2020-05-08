// create the module and name it noteApp
var noteApp = angular.module('settingsApp', []);

// create the controller and inject Angular's $scope
noteApp.controller('mainController', function($scope, $window) {

  $scope.getUserInfo = function() {
    $.get("/userinfo", function(data, status) {
      $scope.username = data.username;
      $scope.email = data.email;
      $scope.name = data.name;
      $scope.gender = data.gender;
      $scope.birthdate = data.birthdate;
      $scope.address = data.address;
      $scope.$digest();
    });
  }

  // Get user information and update form with placeholder text
  $scope.getUserInfo();

  // When pressing update, get form data that has been filled and make request to backend
  $scope.updateUserInfo = function() {
    var username = document.getElementById("inputUsername").value;
    if (username != "") {
      $.post("/update_userinfo", {username: username}, function(data, status) {});
    }
    var email = document.getElementById("inputEmail").value;
    if (email != "") {
      $.post("/update_userinfo", {email: email}, function(data, status) {});
    }
    var name = document.getElementById("inputName").value;
    if (name != "") {
      $.post("/update_userinfo", {name: name}, function(data, status) {});
    }
    var gender = document.getElementById("inputGender").value;
    if (gender != "") {
      $.post("/update_userinfo", {gender: gender}, function(data, status) {});
    }
    var birthdate = document.getElementById("inputBirthdate").value;
    if (birthdate) {
      $.post("/update_userinfo", {birthdate: birthdate}, function(data, status) {});
    }
    var address = document.getElementById("inputAddress").value;
    if (address != "") {
      $.post("/update_userinfo", {address: address}, function(data, status) {});
    }
    alert("Your profile has been updated!");
    location.reload();
  }

  $scope.deleteUser = function() {
    let isDelete = confirm("Are you sure you would like to delete your account? Your account will be permanently removed after 30 days.");
    if ( isDelete ) {
      var username = $('#username').text();
      $.post("/mark_user_delete", {user: username}, function(data, status) {
        // Delete user and reload the page
        // TODO - add proper error handling here
        $window.location.href = '/logout';
      });
    }
  }

});
