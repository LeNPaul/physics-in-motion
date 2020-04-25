// create the module and name it noteApp
var blogApp = angular.module('blogApp', []);

// create the controller and inject Angular's $scope
blogApp.controller('mainController', function($scope) {

    $scope.hello = 'Hello World';

});
