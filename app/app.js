'use strict';
angular.module('app', [
    'ngRoute',
    'core'
]).config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'core/page/login/login-page.template.html'
        })
        .when('/', {
            templateUrl: 'core/page/home/home-page.tpl.html'
        })
        .otherwise({ redirectTo: '/' });
});
