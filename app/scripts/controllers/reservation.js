'use strict';

/**
 * @ngdoc function
 * @name hotelApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the hotelApp
 */

angular.module('hotelApp')
    .controller('ReservationCtrl', function($scope, $http, $ngBootbox, $state, RoomService, ReservationService) {

        $http({
                method: 'GET',
                url: 'http://localhost:8080/v0/account',
                type: 'json'
            }).then(function successCallback(response) {
                $scope.cuenta = response.data;

            });
      $scope.reservationDone =ReservationService.getReservation();

      $scope.disabled = false;

       $scope.saveReservation = function () {
         if(!$scope.bank){
            $scope.errorMsg = 'Please write a Bank';
            $scope.disabled = true;
           return;

         }else{
           $scope.disabled = false;
         }
         if(!$scope.transferCode){
            $scope.errorMsg = 'Please write a Confirmation Code';
            $scope.disabled = true;
           return;

         }else{
           $scope.disabled = false;
         }
         if(isNaN($scope.numberPersons)){
           $scope.errorMsg = 'Please write a valid number';
           $scope.disabled = true;
           return;
         }else{
           $scope.disabled = false;
         }
         var room = RoomService.getRoom();
         if($scope.numberPersons > room.maxPersons){
            $scope.errorMsg = 'The number of people can not be higher than the maximum room occupation';
            $scope.disabled = true;
           return;
         }else{
           $scope.disabled = false;
         }

         //TODO : add the confirm data here and then change the response.data.id for the hard coded 1 in confirmationID

         var confirmData = {
          payType: 'Transfer',
          confirmationNumber: $scope.transferCode,
          bank: $scope.bank
         };

        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
         $http({
           method: 'POST',
           url: 'http://localhost:8080/v0/confirmPay',
           type: 'json',
           data: confirmData
         }).then(function successCallback(response) {

           var data = {
             roomId: room.id,
             numberOfPersons: $scope.numberPersons,
             confirmationId: response.data.id
           };
           $http({
             method: 'POST',
             url: 'http://localhost:8080/v0/reservation',
             type: 'json',
             data: data
           }).then(function successCallback(response) {
             ReservationService.setReservation(response.data);
             $state.go('reservation');
           }).catch(function () {
           });
         });
       };
    });
