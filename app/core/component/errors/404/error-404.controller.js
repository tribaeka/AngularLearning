'use strict';

angular
    .module('error404')
    .controller('Error404Controller', function(navigationService) {
        var $ctrl = this;

        $ctrl.backToHome = navigationService.backToHome;
    });
