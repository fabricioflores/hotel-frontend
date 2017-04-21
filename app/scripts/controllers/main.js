(function() {
  'use strict';

  angular
      .module('hotelApp.controllers')
      .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['SearchService'];

  function MainCtrl(SearchService) {
      var vmMain = this;
      vmMain.search = search;

      function search(){
        vmMain.results = SearchService.searchHotels(vmMain.address.components.city,
                                                    vmMain.address.components.postCode);
      }

  }
})();
