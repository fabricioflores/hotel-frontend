'use strict';

/**
 * @ngdoc function
 * @name hotelApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the hotelApp
 */

angular.module('hotelApp')
    .controller('ReservationCtrl', function($scope, $http, $ngBootbox, $state) {

        $http({
                method: 'GET',
                url: 'http://localhost:8080/v0/cuenta',
                type: 'json'
            }).then(function successCallback(response) {
                $scope.cuenta = response.data;
               }); 
    });
