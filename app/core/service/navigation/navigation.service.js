'use strict';

angular
    .module('navigation')
    .service('navigationService', [ '$state', function($state) {
        function backToHome() {
            $state.go('courses');
        }

        return {
            backToHome: backToHome
        };
    } ]);
