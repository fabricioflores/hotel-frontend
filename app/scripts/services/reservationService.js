(function() {
  'use strict';

  angular
    .module('hotelApp.services')
    .factory('ReservationService', ReservationService);

  ReservationService.$inject = [];

  /* @ngInject */
  function ReservationService() {
    var reservation = {};
    var service = {
      getReservation: getReservation,
      setReservation: setReservation
    };

    return service;

    function getReservation() {
      return reservation;
    }

    function setReservation(newReservation){
      reservation = newReservation;
    }
  }
})();
