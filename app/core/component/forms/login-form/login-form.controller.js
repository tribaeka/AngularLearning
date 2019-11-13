'use strict';

angular
    .module('loginForm')
    .controller('LoginFormController', function(authService) {
        var $ctrl = this;
        $ctrl.isVisibleError = false;

        $ctrl.login = function() {
            var isSuccessfulLogin = authService.loginByEmailAndPassword($ctrl.loginFormEmail, $ctrl.loginFormPassword);
            console.log(authService.getUser());
            $ctrl.isErrorVisible = !isSuccessfulLogin;
        };
    });
