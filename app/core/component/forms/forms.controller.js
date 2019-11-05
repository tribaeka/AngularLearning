'use strict';

angular
    .module('forms')
    .controller('formsController', function($rootScope, courseService, eventsFactory) {
        var $ctrl = this;
        $ctrl.showFormForEdit = false;

        $rootScope.$on(eventsFactory.toggleVisibilityFormForAddEvent, function(event, showFormForAddTrigger) {
            $ctrl.showFormForAdd = showFormForAddTrigger;
        });

        $ctrl.addCourse = function() {
            var course = {
                id: courseService.generateNewId(),
                title: $ctrl.courseTitle,
                description: $ctrl.courseDescription,
                duration: $ctrl.courseDuration,
                creationDate: new Date().toISOString()
            };
            console.log(course);
            courseService.addCourse(course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.courseDuration = '';
            $ctrl.showFormForAdd = !$ctrl.showFormForAdd;
        };

        $rootScope.$on(eventsFactory.courseExchangeWithEditForm, function(event, course) {
            $ctrl.toEditCourse = course;
            $ctrl.showFormForEdit = !$ctrl.showFormForEdit;
        });

        $ctrl.editCourse = function() {
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.showFormForEdit = !$ctrl.showFormForEdit;
        };
    });
