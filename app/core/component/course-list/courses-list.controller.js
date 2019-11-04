'use strict';

angular
    .module('courseList')
    .controller('CourseListController', function($rootScope, courseService, eventsFactory) {
        // eslint-disable-next-line consistent-this,no-invalid-this
        var $ctrl = this;
        $ctrl.coursesIsLoaded = !!$ctrl.courses;

        $ctrl.$onInit = function() {
            courseService.loadCourses()
                .then(function() {
                    $ctrl.courses = courseService.getCourses();
                    $ctrl.coursesIsLoaded = true;
                });
        };

        $ctrl.coursePullSize = 4;

        $ctrl.onLoadMoreClick = function() {
            console.log('load more button');
            $ctrl.coursePullSize += 4;
        };

        $rootScope.$on(eventsFactory.sendFiltersInputValueToCoursesFilterEvent, function(event, data) {
            $ctrl.filterValue = data;
        });

        $ctrl.pushCourseToEditForm = function(course) {
            $rootScope.$broadcast(eventsFactory.courseExchangeWithEditForm, course);
        };

        $ctrl.deleteCourse = function(course) {
            courseService.deleteCourse(course);
        };

        $ctrl.topRatedClassIsIt = function(course) {
            if (course.topRated) return 'top-rated-course';
        };

        $ctrl.creationDateToTime = function(course) {
            return -(new Date(course.creationDate).getTime());
        };
    });
