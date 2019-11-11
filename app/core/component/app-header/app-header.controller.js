'use strict';
angular
    .module('appHeader')
    .controller('AppHeaderController', function($scope, authService) {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            console.log('on init app-header');
        };

        $ctrl.$onDestroy = function() {
            console.log('on destroy app-header');
        };

        $ctrl.$onChanges = function() {
            console.log('on changes');
        };

        $ctrl.getUser = authService.getCurrentUser;
        $ctrl.logout = authService.logout;
        $ctrl.getFullName = authService.getFullName;
    });
