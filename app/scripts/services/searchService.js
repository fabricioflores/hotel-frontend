(function() {
  'use strict';

  angular
      .module('hotelApp.services')
      .factory('SearchService', SearchService);

  SearchService.$inject = ['APP', '$http', '$q'];

  /* @ngInject */
  function SearchService(APP, $http, $q) {
      var service = {
          searchRooms: searchRooms
      };

      return service;

      function searchRooms(city, postalCode) {
        return $http({
          method: 'GET',
          url: APP.apiUrl + 'v0/searchRooms',
          params: {
            zipcode: postalCode,
            city: city
          }
        }).then(function successCallback(response) {
          return response;
        }, function errorCallback(error){
          return $q.reject(error);
        });
      }
  }
})();
