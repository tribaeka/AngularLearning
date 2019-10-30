'use strict';
angular
    .module('appHeader')
    .controller('AppHeaderController', function($scope, userService) {
        // eslint-disable-next-line consistent-this,no-invalid-this
        var $ctrl = this;

        $ctrl.$onInit = function() {
            console.log('on init app-header');
        };

        $ctrl.$onDestroy = function() {
            console.log('on destroy app-header');
        };

        $ctrl.$onChanges = function(changes) {
            console.log('on changes');
        };

        userService.loadUser().then(function(userData) {
            $ctrl.user = userData.data;
        });

        $ctrl.getFullName = userService.getFullName;
    });
