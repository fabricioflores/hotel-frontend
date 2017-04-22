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
