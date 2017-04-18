(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('MainController', function () {
    var ctrl,
      $controller,
      dependencies,
      $scope,
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
      dependencies = {
        SearchService: SearchService
      };

      ctrl = $controller('MainCtrl', dependencies);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });
    });

    describe('functions', function () {
      it('Should call searchHotels of SearchService', function () {
        spyOn(SearchService, 'searchHotels');
        ctrl.address = {
          components: {}
        }
        ctrl.search();
        expect(SearchService.searchHotels).toHaveBeenCalled();
      });
    });

  });
})();
