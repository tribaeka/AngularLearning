'use strict';

angular
    .module('editCourseForm')
    .controller('EditCourseFormController', function($rootScope, courseService, eventsFactory) {
        var $ctrl = this;
        $ctrl.showFormForEdit = false;

        $rootScope.$on(eventsFactory.courseExchangeWithEditForm, function(event, course) {
            $ctrl.toEditCourse = course;
            $ctrl.showFormForEdit = !$ctrl.showFormForEdit;
        });

        $ctrl.editCourse = function() {
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.showFormForEdit = !$ctrl.showFormForEdit;
        };
    });
