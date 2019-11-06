'use strict';
angular.module('app', [
    'ngRoute',
    'core'
]).config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'core/component/course-list/course-list.template.html'
        })
        .otherwise('/', {
            templateUrl: 'index.html'
        });
});
