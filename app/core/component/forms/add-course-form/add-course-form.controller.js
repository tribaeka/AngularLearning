'use strict';

angular
    .module('addCourseForm')
    .controller('AddCourseFormController', function($rootScope, courseService, eventsFactory) {
        var $ctrl = this;

        $rootScope.$on(eventsFactory.toggleVisibilityFormForAddEvent, function() {
            $ctrl.showFormForAdd = true;
        });

        $rootScope.$on(eventsFactory.courseExchangeWithEditForm, function() {
            $ctrl.showFormForAdd = false;
        });

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
            }
            resetForm();
        };

        function resetForm() {
            $ctrl.courseTitle = undefined;
            $ctrl.courseDescription = undefined;
            $ctrl.courseDuration = undefined;
            $ctrl.showFormForAdd = false;
        }
    });
