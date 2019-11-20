'use strict';

angular
    .module('navigation')
    .service('navigationService', [ '$location', function($location) {
        function backToHome() {
            $location.path('/');
        }

        function getUrlParams() {
            return $location.search();
        }

        return {
            backToHome: backToHome,
            getUrlParams: getUrlParams
        };
    } ]);
