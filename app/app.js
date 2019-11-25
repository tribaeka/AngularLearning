'use strict';
angular.module('app', [
    'ngRoute',
    'core'
]).config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'core/page/single-form/login/login-page.template.html'
        })
        .when('/courses/new', {
            templateUrl: 'core/page/single-form/add-course/add-course-page.template.html'
        })
        .when('/courses/:courseId', {
            templateUrl: 'core/page/single-form/edit-course/edit-course-page.template.html'
        })
        .when('/courses', {
            templateUrl: 'core/page/courses/courses-page.template.html'
        })
        .otherwise({ template: '<error404></error404>' });
});
