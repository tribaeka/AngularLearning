'use strict';

angular
    .module('editCourseForm')
    .controller('EditCourseFormController', function($rootScope, courseService, eventsFactory) {
        var $ctrl = this;
        $ctrl.showFormForEdit = false;

        $rootScope.$on(eventsFactory.courseExchangeWithEditForm, function(event, course) {
            $ctrl.showFormForEdit = true;
            $ctrl.toEditCourse = course;
        });

        $rootScope.$on(eventsFactory.toggleVisibilityFormForAddEvent, function(event, showFormForAddTrigger) {
            $ctrl.showFormForEdit = false;
        });

        $ctrl.editCourse = function() {
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.toEditCourse = undefined;
            $ctrl.showFormForEdit = false;
        };
    });
