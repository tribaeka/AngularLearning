'use strict';
angular
    .module('appHeader')
    .controller('AppHeaderController', function($scope, authService) {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            console.log('on init app-header');
            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.guestName = 'Hello, guest!';
                });
            }, 0);
        };

        $ctrl.$onDestroy = function() {
            console.log('on destroy app-header');
        };

        $ctrl.$onChanges = function() {
            console.log('on changes');
        };

        $ctrl.isAuthenticated = authService.isAuthenticated;
        $ctrl.logout = function() {
            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.guestName = 'Guest';
                    authService.logout();
                });
            }, 0);
        };
        $ctrl.getUserInfo = authService.getUserInfo;
    });
