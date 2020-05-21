'use strict';

angular.module('myApp.profiles', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/profiles', {
      templateUrl: 'profiles/profiles.html',
      controller: 'ProfilesCtrl'
    });
  }])

  .controller('ProfilesCtrl', ['$scope', function ($scope) {

  }]);
