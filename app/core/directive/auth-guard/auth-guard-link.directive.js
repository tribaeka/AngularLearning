'use strict';

angular
    .module('authGuard')
    .directive('authGuardLink', function(authService) {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {

                if (!authService.isAuthenticated()) {
                    attributes.uiSref = 'login';
                }
            }
        };
    });
