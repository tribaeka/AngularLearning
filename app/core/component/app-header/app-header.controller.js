'use strict';
angular
    .module('appHeader')
    .controller('AppHeaderController', function($scope, userService) {
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

        // userService.loadUser().then(function(userData) {
        //     $ctrl.user = userData;
        // });

        $ctrl.getFullName = userService.getFullName;
    });
