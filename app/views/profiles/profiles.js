'use strict';

angular
  .module('myApp.profiles', ['ngRoute'])
  .controller('ProfilesCtrl', ProfileController)
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/profiles', {
      templateUrl: 'views/profiles/profiles.html',
      controller: 'ProfilesCtrl'
    });
  }]);

ProfileController.$inject = ['$scope'];
function ProfileController ($scope) {
  $scope.searchForm = {};
  $scope.query = {};
}
