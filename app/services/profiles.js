'use strict';

angular
  .module('myApp')
  .factory('ProfileService', ProfileService);

ProfileService.$inject = ['$http'];

function ProfileService ($http) {
  return {
    get: async () => {
      const res = await $http.get('/api/v1/profiles');
      return res.data.data;
    },
    put: async () => {
      const res = await $http.put('/api/v1/profiles', {});
      return res.data.data;
    }
  };
}
