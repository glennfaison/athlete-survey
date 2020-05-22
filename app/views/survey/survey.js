'use strict';

angular.module('myApp.survey', ['ngRoute'])
  .controller('SurveyCtrl', SurveyController)
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/survey', {
      templateUrl: 'views/survey/survey.html',
      controller: 'SurveyCtrl',
    });
  }]);
/**
 * Survey Controller
 * @param {Object} $scope
 * @param {string[]} $scope.sports
 * @param {string[]} $scope.genders
 * @param {string[]} $scope.socialMedia
 * @param {Object} $scope.profile
 * @param {*} SportService
 * @param {*} GenderService
 */
function SurveyController ($location, $scope, SportService, GenderService, ProfileService) {
  // #region initialization logic
  $scope.sports = [];
  $scope.genders = [];
  $scope.profile = {
    name: `Glenn Faison });
  }]);
/**
 * Survey Controller
 * @param {Object} $scope
 * @param {string[]} $scope.sports
 * @param {string[]} $scope.genders
 * @param {string[]} $scope.socialMedia
 * @param {Object} $scope.profile
 * @param {*} SportService
 * @param {*} GenderService
 */
function SurveyController ($scope, SportService, GenderService) {
  // #region initialization logic
  $scope.sports = [];
  $scope.genders = [];
  $scope.profile = {`,
    sport: ['Soccer', 'Tennis'],
    nationality: 'Cameroon',
    gender: 'MALE'
  };
  $scope.socialMedia = ['Facebook', 'Twitter', 'Snapchat', 'Quora', 'Instagram'];
  // #endregion initialization logic

  $scope.loadSports = async () => ($scope.sports = await SportService.get());
  $scope.loadGenders = async () => ($scope.genders = await GenderService.get());

  $scope.clearSportsSearch = async () => ($scope.sportsSearch = '');

  $scope.submit = async (profile) => {
    await ProfileService.post(profile);
    $location.path('/profiles');
  };
}
SurveyController.$inject = ['$location', '$scope', 'SportService', 'GenderService', 'ProfileService'];
