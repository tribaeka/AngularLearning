'use strict';

angular
    .module('addCourseForm')
    .controller('AddCourseFormController', [ 'courseService', '$location', '$scope', function(courseService, $location) {
        var $ctrl = this;

        $ctrl.backToHome = function() {
            $location.path('/');
        };
        if (_.isEmpty(courseService.getCourses())) {
            courseService.loadCourses();
        }
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
