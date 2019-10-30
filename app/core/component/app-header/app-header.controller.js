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
        $ctrl.$onChanges = function(changes) {
            console.log('on changes');
        };
        userService.loadUser().then(function(response) {
            $ctrl.user = response.data;
        });
        $ctrl.getFullName = userService.getFullName;
    });
