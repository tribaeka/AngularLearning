'use strict';
angular.module('app', [
    'ngRoute',
    'core',
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('courses', {
            url: '/courses',
            templateUrl: 'core/page/courses/courses-page.template.html',
            data: {
                displayName: 'Courses'
            }
        })
        .state('addCourse', {
            url: '/courses/new',
            templateUrl: 'core/page/single-form/add-course/add-course-page.template.html',
            data: {
                displayName: 'Add Course'
            }
        })
        .state('editCourse', {
            url: '/courses/:courseId',
            templateUrl: 'core/page/single-form/edit-course/edit-course-page.template.html',
            data: {
                displayName: 'Edit Course'
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'core/page/single-form/login/login-page.template.html'
        })
        .state('404', {
            template: '<error404></error404>'
        });

    $urlRouterProvider
        .when('/', function($state) {
            $state.go('courses');
        })
        .otherwise(function($injector) {
            $injector.invoke(function($state) {
                $state.transitionTo('404', {}, false);
            });
        });
});
