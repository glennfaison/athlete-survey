'use strict';

angular
  .module('myApp')
  .factory('GenderService', GenderService);

GenderService.$inject = ['$http'];

function GenderService ($http) {
  return {
    get: async () => {
      const res = await $http.get('/api/v1/genders');
      return res.data.data;
    }
  };
}
