'use strict';
angular.module('app', [
    'ngRoute',
    'core',
    'appHeader',
    'breadcrumbs',
    'courseContent',
    'courseControl',
    'forms',
    'courseList',
    'footerComp'
]).config(function($routeProvider) {
    $routeProvider
        .otherwise('/', {
            templateUrl: 'index.html'
        });
});
