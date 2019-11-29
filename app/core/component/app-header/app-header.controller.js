'use strict';
angular
    .module('appHeader')
    .controller('AppHeaderController', function($scope, authService) {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.guestName = 'Hello, guest!';
                });
            }, 0);
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
