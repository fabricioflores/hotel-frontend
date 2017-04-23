(function() {
  'use strict';

  angular
      .module('hotelApp.controllers')
      .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$state'];

  function MainCtrl($state) {
      var vmMain = this;
      vmMain.search = search;

      function search(){
        $state.go('search',{
          city:vmMain.address.components.city,
          zipcode:vmMain.address.components.postCode
        });
      }

  }
})();
