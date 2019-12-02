'use strict';

angular
    .module('addCourseForm')
    .controller('AddCourseFormController', [ 'courseService', 'navigationService', function(courseService, navigationService) {
        var $ctrl = this;

        $ctrl.backToHome = navigationService.backToHome;

        $ctrl.addCourse = function() {
            var course = {
                id: -1,
                title: $ctrl.courseTitle,
                description: $ctrl.courseDescription,
                duration: $ctrl.courseDuration,
                creationDate: new Date().toISOString()
            };

            if (!!course.duration && !!course.title && !!course.description) {
                courseService.addCourse(course);
                $ctrl.backToHome();
            }
        };
    } ] );
