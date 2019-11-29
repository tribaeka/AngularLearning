'use strict';

angular
    .module('courseList')
    .controller('CourseListController', function(
        $rootScope,
        courseService,
        eventsFactory,
        $state,
        authService
    ) {
        var $ctrl = this;
        $ctrl.coursesIsLoaded = !!$ctrl.courses;

        $ctrl.$onInit = function() {
            if (_.isEmpty(courseService.getCourses())) {
                courseService.loadCourses()
                    .then(function() {
                        $ctrl.courses = courseService.getCourses();
                        $ctrl.coursesIsLoaded = true;
                    });
            } else {
                $ctrl.courses = courseService.getCourses();
                $ctrl.coursesIsLoaded = true;
            }
        };

        $ctrl.coursePullSize = 4;

        $ctrl.onLoadMoreClick = function() {
            $ctrl.courses = courseService.getCourses();
            $ctrl.coursePullSize += 4;
        };

        $rootScope.$on(eventsFactory.sendFiltersInputValueToCoursesFilterEvent, function(event, filterValue) {
            $ctrl.filterValue = filterValue;
        });

        $ctrl.deleteCourse = function(course) {
            if (confirm('Do you really want to delete this course?')) {
                courseService.deleteCourse(course);
            }
        };

        $ctrl.isTopRated = function(course) {
            if (course.topRated) return 'top-rated-course';
        };

        $ctrl.creationDateToTime = function(course) {
            return -(new Date(course.creationDate).getTime());
        };

        $ctrl.getLinkUrl = function(id) {
            if (authService.isAuthenticated()) {
                return $state.href('editCourse', { courseId: id });
            }

            return $state.href('login');

        };
    });
