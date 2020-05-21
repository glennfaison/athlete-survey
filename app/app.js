'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  // 'ngMaterial',
  // 'md-steppers',
  'ngRoute',
  'myApp.profiles',
  'myApp.survey',
  'myApp.version'
])

  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/survey' });
  }]);
