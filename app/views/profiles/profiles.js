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

/**
 * Profile List Controller
 * @param {Object} $scope
 * @param {Object[]} $scope.profiles
 * @param {Object} $scope.searchForm
 * @param {Object} $scope.query
 * @param {*} SportService
 * @param {*} GenderService
 */
function ProfileController ($scope, ProfileService) {
  // #region initialization logic
  $scope.searchForm = {};
  $scope.query = {};
  $scope.profiles = [];
  ProfileService.get().then(profiles => ($scope.profiles = profiles));
  // #endregion initialization logic
}

ProfileController.$inject = ['$scope', 'ProfileService'];
