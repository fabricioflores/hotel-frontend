'use strict';

/**
 * @ngdoc overview
 * @name hotelApp
 * @description
 * # hotelApp
 *
 * Main module of the application.
 */
angular
  .module('hotelApp', [
    'ngMessages',
    'ui.router',
    'ngTouch',
    'vsGoogleAutocomplete',
    'hotelApp.services',
    'hotelApp.controllers',
    'ngBootbox'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vmMain'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vmAbout'
      })
      .state('room', {
        url: '/room/:roomId',
        templateUrl: 'views/room.html',
        controller: 'RoomCtrl',
        controllerAs: 'room'
      })
      .state('search', {
        url: '/search?city&zipcode',
        params: {
          city: null,
          zipcode: null
        },
        templateUrl: 'views/search.html',
        controller: 'SearchController',
        controllerAs: 'vmSearch',
        resolve: {
          rooms: function($stateParams, SearchService, $state){
          //   return SearchService.searchRooms($stateParams.city,
          //                                    $stateParams.zipcode)
          //  .then(function success(response){
          //    return response;
          //  }, function error(){
          //    $state.go('main');
          // });
          var x = [
            {
                hotelId: 1,
                name: 'hotel1',
                addressLine: 'address line 1',
                city: 'city 1',
                province: 'province 1',
                zipCode: '111111',
                rooms: [
                    {
                        id: 1,
                        hotelId: 1,
                        roomType: 'Individual',
                        price: 123123,
                        singleBedCount: 1,
                        doubleBedCount: 0,
                        queenBedCount: 0,
                        kingBedCount: 0
                    },
                    {
                        id: 2,
                        hotelId: 1,
                        roomType: 'Double',
                        price: 234234,
                        singleBedCount: 0,
                        doubleBedCount: 1,
                        queenBedCount: 0,
                        kingBedCount: 0
                    }
                ]
            },
            {
                hotelId: 2,
                name: 'hotel2',
                addressLine: 'address line 2',
                city: 'city 2',
                province: 'province 2',
                zipCode: '222222',
                rooms: [
                    {
                        id: 3,
                        hotelId: 2,
                        roomType: 'Individual',
                        price: 123123,
                        singleBedCount: 1,
                        doubleBedCount: 0,
                        queenBedCount: 0,
                        kingBedCount: 0
                    },
                    {
                        id: 4,
                        hotelId: 2,
                        roomType: 'Double',
                        price: 234234,
                        singleBedCount: 0,
                        doubleBedCount: 1,
                        queenBedCount: 0,
                        kingBedCount: 0
                    }
                ]
            }
        ];
        return x;
          }
        }
      })
       .state('reservation', {
        url: '/room/reservation/datos',
        templateUrl: 'views/reservation.html',
        controller: 'ReservationCtrl',
        controllerAs: 'reservation'
      });
      $urlRouterProvider.otherwise('/');
  });

angular.module('hotelApp.services', []);
angular.module('hotelApp.controllers', []);
