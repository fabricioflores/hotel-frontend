'use strict';

/**
 * @ngdoc function
 * @name hotelApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the hotelApp
 */

angular.module('hotelApp')
    .controller('ReservationCtrl', function($scope, $http, $ngBootbox, $state, RoomService) {

        $http({
                method: 'GET',
                url: 'http://localhost:8080/v0/account',
                type: 'json'
            }).then(function successCallback(response) {
                $scope.cuenta = response.data;

            });

      $scope.disabled = false;

       $scope.saveReservation = function () {
         var room = RoomService.getRoom();
         if(isNaN($scope.numberPersons)){
           $scope.errorMsg = "Please write a valid number";
           $scope.disabled = true;
         }
         if($scope.numberPersons > room.maxPersons){
            $scope.errorMsg = "The number of people can't be higher than the maximum room occupation";
            $scope.disabled = true;
           return;
         }else{
           $scope.disabled = false;
         }

         //TODO : add the confirm data here and then change the response.data.id for the hard coded 1 in confirmationID

         var confirmData = {};


         $http({
           method: 'POST',
           url: 'http://localhost:8080/v0/confirm',
           type: 'json',
           data: confirmData
         }).then(function successCallback(response) {

           var data = {
             roomId: room.id,
             numberOfPersons: $scope.numberPersons,
             confirmationId: 1
           };
           $http({
             method: 'POST',
             url: 'http://localhost:8080/v0/reservation',
             type: 'json',
             data: data
           }).then(function successCallback(response) {
             $scope.reservationDone = response.data;
             $state.go('reservation');
           }).catch(function () {
             alert('Please try again later.')
           });
         });
       }
    });
