'use strict';

angular
    .module('navigation')
    .service('navigationService', [ '$location', function($location) {
        function backToHome() {
            $location.path('/');
        }

        return {
            backToHome: backToHome
        };
    } ]);
