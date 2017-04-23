'use strict';

/**
 * @ngdoc function
 * @name hotelApp.controller:RoomCtrl
 * @description
 * # RoomCtrl
 * Controller of the hotelApp
 */
angular.module('hotelApp')
  .controller('RoomCtrl', function ($scope, $http) {
	 $http({
      method: 'GET',
      url: 'http://localhost:8080/v0/room/1',
      type:'json'
    }).then(function successCallback(response) {
        $scope.greeting = response.data;
        debugger
      });
  });
