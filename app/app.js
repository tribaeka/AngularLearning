'use strict';
angular.module('app', [
    'ngRoute',
    'core',
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('courses', {
            url: '/courses',
            templateUrl: 'core/page/courses/courses-page.template.html'
        })
        .state('addCourse', {
            url: '/courses/new',
            templateUrl: 'core/page/single-form/add-course/add-course-page.template.html'
        })
        .state('editCourse', {
            url: '/courses/:courseId',
            templateUrl: 'core/page/single-form/edit-course/edit-course-page.template.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'core/page/single-form/login/login-page.template.html'
        })
        .state('404', {
            template: '<error404></error404>'
        });

    $urlRouterProvider.otherwise(function($injector) {
        $injector.invoke(function($state) {
            $state.transitionTo('404', {}, false);
        });
    });
});

// .config(function($routeProvider) {
//     $routeProvider
//         .when('/login', {
//             templateUrl: 'core/page/single-form/login/login-page.template.html'
//         })
//         .when('/courses/new', {
//             templateUrl: 'core/page/single-form/add-course/add-course-page.template.html'
//         })
//         .when('/courses/:courseId', {
//             templateUrl: 'core/page/single-form/edit-course/edit-course-page.template.html'
//         })
//         .when('/courses', {
//             templateUrl: 'core/page/courses/courses-page.template.html'
//         })
//         .otherwise({ template: '<error404></error404>' });
// });
