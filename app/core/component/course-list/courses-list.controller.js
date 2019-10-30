'use strict';

angular
    .module('courseList')
    .controller('CourseListController', function($rootScope, $scope, courseService) {
        var $ctrl = this;
        var coursesLoadEvent = 'coursesWasLoaded';
        var applyFilterEvent = 'applyFilter';
        var addCourseEvent = 'addCourse';
        var editCourseEvent = 'editCourse';
        var pushCourseToEditFormEvent = 'pushCourseToEditForm';
        $rootScope.$on(coursesLoadEvent, function(event, data) {
            $ctrl.courses = data;
        });
        $ctrl.coursePullSize = 4;

        $ctrl.increase = function() {
            console.log('load more button');
            $ctrl.coursePullSize += 4;
        };

        $rootScope.$on(applyFilterEvent, function(event, data) {
            $ctrl.filterValue = data;
        });

        $rootScope.$on(addCourseEvent, function(event, data) {
            courseService.addDisplayDateAndTimeAfterUpdating(data);
            courseService.addCourse(data, $ctrl.courses);
        });

        $ctrl.pushCourseToEditForm = function(course) {
            $rootScope.$broadcast(pushCourseToEditFormEvent, course);
        };

        $rootScope.$on(editCourseEvent, function(event, data) {
            courseService.editCourse(data, $ctrl.courses);
        });

        $ctrl.deleteCourse = function(course) {
            courseService.deleteCourse(course, $ctrl.courses);
        };

    });
