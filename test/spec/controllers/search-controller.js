(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('SearchController', function () {
    var ctrl,
      $controller,
      dependencies,
      $scope,
      rooms,
      $stateParams,
      SearchService;

    beforeEach(module('hotelApp.controllers'));
    beforeEach(module('hotelApp.services', function ($provide) {
      $provide.factory('SearchService', function () {
        return {
          searchHotels: function(){
            return [];
          }
        };
      });
    }));

    beforeEach(inject(function (_$controller_, _$rootScope_,
      _SearchService_) {
      $scope = _$rootScope_.$new();
      $controller = _$controller_;
      SearchService = _SearchService_;
      rooms = [];
      $stateParams = {
        city: 'Alabama',
        zipcode: 666
      };
      dependencies = {
        SearchService: SearchService,
        rooms: rooms,
        $stateParams: $stateParams
      };


      ctrl = $controller('SearchController', dependencies);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
        expect(ctrl.rooms).toBe(rooms);
        expect(ctrl.city).toBe('Alabama');
        expect(ctrl.zipcode).toBe(666);
      });
    });

  });
})();
