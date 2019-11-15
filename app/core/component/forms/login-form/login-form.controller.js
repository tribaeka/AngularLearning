'use strict';

angular
    .module('loginForm')
    .controller('LoginFormController', function(authService) {
        var $ctrl = this;

        $ctrl.login = function() {
            authService.loginByEmailAndPassword($ctrl.loginFormEmail, $ctrl.loginFormPassword);
            $ctrl.isErrorVisible = !authService.isAuthenticated();
        };
    });
