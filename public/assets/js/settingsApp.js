// create the module and name it noteApp
var noteApp = angular.module('settingsApp', []);

// create the controller and inject Angular's $scope
noteApp.controller('mainController', function($scope) {

    $scope.hello = 'Hello World!';

});
