'use strict';
angular
    .module('appHeader')
    .controller('AppHeaderController', function($scope, userService) {
        var $ctrl = this;
        userService.loadUser().then(function(response) {
            $ctrl.user = response.data;
        });
        $ctrl.userIsLoaded = function(){
            //TODO timeout
        };
        $ctrl.getFullName = userService.getFullName;
    });
