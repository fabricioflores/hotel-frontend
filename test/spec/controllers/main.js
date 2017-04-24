(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('MainController', function () {
    var ctrl,
      $controller,
      dependencies,
      $scope,
      $state;

    beforeEach(module('hotelApp.controllers'));
    beforeEach(angular.mock.module(function ($provide) {
      $provide.provider('$state', function () {
        return {
          $get: function () {
            return {
              go: function(){
                return null;
              }
            };
          }
        };
      });
    }));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$state_) {
      $scope = _$rootScope_.$new();
      $controller = _$controller_;
      $state = _$state_;
      dependencies = {
        $state: $state
      };

      ctrl = $controller('MainCtrl', dependencies);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });
    });

    describe('functions', function () {
      it('Should change state when search', function () {
        spyOn($state, 'go');
        ctrl.address = {
          components: {}
        };
        ctrl.search();
        expect($state.go).toHaveBeenCalled();
      });
    });

  });
})();
