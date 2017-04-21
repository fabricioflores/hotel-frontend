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
    'ngTouch'
  ])
  
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('room', {
        url: '/room/:roomId',
        templateUrl: 'views/room.html',
        controller: 'RoomCtrl',
        controllerAs: 'room'
      });

      $urlRouterProvider.otherwise('/');
  });
