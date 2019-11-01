'use strict';

angular
    .module('forms')
    .controller('formsController', function($rootScope, eventsFactory) {
        // eslint-disable-next-line consistent-this,no-invalid-this
        var $ctrl = this;

        $rootScope.$on(eventsFactory.toggleVisibilityFromForAddEvent, function(event, data) {
            $ctrl.showFromForAdd = data;
        });

        $ctrl.addCourse = function() {
            var course = {
                title: $ctrl.courseTitle,
                description: $ctrl.courseDescription,
                uploadDate: new Date().toISOString()
            };

            $rootScope.$broadcast(eventsFactory.addCourseEvent, course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
        };

        $rootScope.$on(eventsFactory.pushCourseToEditFormEvent, function(event, data) {
            $ctrl.selectedCourse = data;
            $ctrl.courseTitleToEdit = data.title;
            $ctrl.courseDescriptionToEdit = data.description;
            $ctrl.courseUploadDateToEdit = data.uploadDate;
            $ctrl.courseDurationToEdit = data.duration;
            $ctrl.showFromForEdit = true;
        });

        $ctrl.editCourse = function() {
            var course = {
                title: $ctrl.courseTitleToEdit,
                description: $ctrl.courseDescriptionToEdit,
                uploadDate: $ctrl.courseUploadDateToEdit,
                duration: $ctrl.courseDurationToEdit,
                selectedCourse: $ctrl.selectedCourse
            };
            $rootScope.$broadcast(eventsFactory.editCourseEvent, course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.showFromForEdit = !$ctrl.showFromForEdit;
        };
    });
