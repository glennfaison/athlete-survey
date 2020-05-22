'use strict';

angular
  .module('myApp')
  .factory('ProfileService', ProfileService);

ProfileService.$inject = ['$http'];

function ProfileService ($http) {
  return {
    post: async (profile) => {
      const res = await $http.post('/api/v1/profiles', profile);
      return res.data.data;
    },
    get: async () => {
      const res = await $http.get('/api/v1/profiles');
      return res.data.data;
    },
    put: async (id, profile) => {
      const res = await $http.put(`/api/v1/profiles${id}`, profile);
      return res.data.data;
    },
  };
}
