'use strict';

angular
    .module('courseList')
    .controller('CourseListController', function(
        $rootScope,
        courseService,
        eventsFactory,
        $state,
        authService,
        searchService
    ) {
        var $ctrl = this;
        $ctrl.coursesIsLoaded = !!$ctrl.courses;
        $ctrl.coursePullSize = 4;
        $ctrl.$onInit = function() {
            loadCourses($ctrl.coursePullSize);
        };

        function loadCourses(size) {
            courseService.getPageableCourses(size)
                .then(function(coursesData) {
                    $ctrl.courses = coursesData;
                    $ctrl.coursesIsLoaded = true;
                });
        }

        $ctrl.onLoadMoreClick = function() {
            $ctrl.coursePullSize += 4;
            loadCourses($ctrl.coursePullSize);
        };

        $rootScope.$on(eventsFactory.sendFiltersInputValueToCoursesFilterEvent, function(event, filterValue) {
            $ctrl.coursesIsLoaded = false;
            searchService.executeCourseSearch(filterValue)
                .then(function(searchResultsData) {
                    $ctrl.courses = searchResultsData;
                    $ctrl.coursesIsLoaded = true;
                });
        });

        $ctrl.deleteCourse = function(course) {
            if (confirm('Do you really want to delete this course?')) {
                $ctrl.coursesIsLoaded = false;
                courseService.deleteCourse(course)
                    .then(function() {
                        loadCourses($ctrl.coursePullSize);
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
