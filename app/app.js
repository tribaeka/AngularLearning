'use strict';
angular.module('app', [
    'ngRoute',
    'appHeader',
    'breadcrumbs',
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
