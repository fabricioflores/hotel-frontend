(function() {
  'use strict';

  angular
      .module('hotelApp.services')
      .factory('SearchService', SearchService);

  SearchService.$inject = [];

  /* @ngInject */
  function SearchService() {
      var service = {
          searchHotels: searchHotels
      };

      return service;

      function searchHotels(city, postalCode) {
        return [];
      }
  }
})();
