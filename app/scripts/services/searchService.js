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
        /* jshint ignore:start */
        return $http({
          method: 'GET',
          url: APP.apiUrl + 'v0/hotel',
          params: {
            zip_code: postalCode,
            city: city
          }
        }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(error){
          return $q.reject(error);
        });
        /* jshint ignore:end */
      }
  }
})();
