'use strict';

angular
    .module('courseList')
    .controller('CourseListController', function(
        $rootScope, courseService, addCourseEvent, editCourseEvent,
        sendFiltersInputValueToCoursesFilterEvent, pushCourseToEditFormEvent
    ) {
        // eslint-disable-next-line consistent-this,no-invalid-this
        var $ctrl = this;
        $ctrl.coursesIsLoaded = !!$ctrl.courses;

        $ctrl.$onInit = function() {
            courseService.loadCourses().then(function(coursesData) {
                $ctrl.courses = coursesData;
                $ctrl.coursesIsLoaded = true;
            });
        };

        $ctrl.coursePullSize = 4;

        $ctrl.onLoadMoreClick = function() {
            console.log('load more button');
            $ctrl.coursePullSize += 4;
        };

        $rootScope.$on(sendFiltersInputValueToCoursesFilterEvent, function(event, data) {
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
