'use strict';

angular
    .module('addCourseForm')
    .controller('AddCourseFormController', function($rootScope, courseService, eventsFactory) {
        var $ctrl = this;

        $rootScope.$on(eventsFactory.toggleVisibilityFormForAddEvent, function(event, showFormForAddTrigger) {
            $ctrl.showFormForAdd = showFormForAddTrigger;
        });

        $rootScope.$on(eventsFactory.courseExchangeWithEditForm, function(event, course) {
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
            courseService.addCourse(course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.courseDuration = '';
            $ctrl.showFormForAdd = !$ctrl.showFormForAdd;
        };
    });
