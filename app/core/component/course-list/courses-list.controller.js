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
            loadCourses();
        };

        function loadCourses() {
            courseService.getCourses()
                .then(function(coursesData) {
                    $ctrl.courses = coursesData;
                    $ctrl.coursesIsLoaded = true;
                });
        }

        $ctrl.onLoadMoreClick = function() {
            //todo need repair
            $ctrl.courses = courseService.getCourses();
            $ctrl.coursePullSize += 4;
        };

        $rootScope.$on(eventsFactory.sendFiltersInputValueToCoursesFilterEvent, function(event, filterValue) {
            $ctrl.filterValue = filterValue;
        });

        $ctrl.deleteCourse = function(course) {
            if (confirm('Do you really want to delete this course?')) {
                $ctrl.coursesIsLoaded = false;
                courseService.deleteCourse(course)
                    .then(function() {
                        loadCourses();
                    });
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
