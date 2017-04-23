(function() {
  'use strict';

  angular
      .module('hotelApp.controllers')
      .controller('SearchController', SearchController);

  SearchController.$inject = ['SearchService', 'rooms', '$stateParams'];

  function SearchController(SearchService, rooms, $stateParams) {
      var vmSearch = this;
      vmSearch.rooms = rooms;
      vmSearch.city= $stateParams.city;
      vmSearch.zipcode= $stateParams.zipcode;
  }
})();
