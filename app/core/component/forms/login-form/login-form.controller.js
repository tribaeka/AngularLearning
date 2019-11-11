'use strict';

angular
    .module('loginForm')
    .controller('LoginFormController', function(authService) {
        var $ctrl = this;
        $ctrl.isVisibleError = false;

        $ctrl.login = function() {
            var isSuccessLogin = authService.loginByEmailAndPassword($ctrl.loginFormEmail, $ctrl.loginFormPassword);
            $ctrl.isVisibleError = !isSuccessLogin;
        };
    });
