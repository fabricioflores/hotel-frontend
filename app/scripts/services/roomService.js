(function() {
  'use strict';

  angular
    .module('hotelApp.services')
    .factory('RoomService', RoomService);

  RoomService.$inject = [];

  /* @ngInject */
  function RoomService() {
    var room = {};
    var service = {
      getRoom: getRoom,
      setRoom: setRoom
    };

    return service;

    function getRoom() {
      return room;
    }

    function setRoom(newRoom){
      room = newRoom;
    }
  }
})();
