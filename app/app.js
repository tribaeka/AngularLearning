'use strict';
angular.module('app', [
    'ngRoute',
    'core',
    'appHeader',
    'breadcrumbs',
    'courseControl',
    'forms',
    'courseList',
    'appFooter',
    'stateBy'
]).config(function($routeProvider) {
    $routeProvider
        .otherwise('/', {
            templateUrl: 'index.html'
        });
});
