'use strict';

angular
  .module('myApp')
  .factory('SportService', SportService);

SportService.$inject = ['$http'];

function SportService ($http) {
  return {
    get: async () => {
      const res = await $http.get('/api/v1/sports');
      return res.data.data;
    }
  };
}
