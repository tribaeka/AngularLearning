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
    'appFooter'
]).config(function($routeProvider) {
    $routeProvider
        .otherwise('/', {
            templateUrl: 'index.html'
        });
});
