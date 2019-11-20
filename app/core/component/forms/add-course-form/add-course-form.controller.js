'use strict';

angular
    .module('addCourseForm')
    .controller('AddCourseFormController', [ 'courseService', 'navigationService', '$scope', function(courseService, navigationService) {
        var $ctrl = this;

        $ctrl.backToHome = navigationService.backToHome;

        $ctrl.addCourse = function() {
            var course = {
                id: courseService.generateNewId(),
                title: $ctrl.courseTitle,
                description: $ctrl.courseDescription,
                duration: $ctrl.courseDuration,
                creationDate: new Date().toISOString()
            };

            if (course.duration !== undefined
                && course.title !== undefined
                && course.description !== undefined) {
                courseService.addCourse(course);
                $ctrl.backToHome();
            }
        };
    } ] );
