'use strict';

angular
    .module('forms')
    .controller('formsController', function($rootScope, courseService, eventsFactory) {
        // eslint-disable-next-line consistent-this,no-invalid-this
        var $ctrl = this;

        $rootScope.$on(eventsFactory.toggleVisibilityFromForAddEvent, function(event, data) {
            $ctrl.showFromForAdd = data;
        });

        $ctrl.addCourse = function() {
            var course = {
                title: $ctrl.courseTitle,
                description: $ctrl.courseDescription,
                duration: $ctrl.courseDuration,
                uploadDate: new Date().toISOString()
            };
            courseService.addCourse(course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.courseDuration = '';
            $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
        };

        $rootScope.$on(eventsFactory.pushCourseToEditFormEvent, function(event, data) {
            var course = {
                title: data.title,
                description: data.description,
                uploadDate: data.uploadDate,
                duration: data.duration,
                selectedCourse: data
            };
            $ctrl.toEditCourse = course;
            $ctrl.showFromForEdit = true;
        });

        $ctrl.editCourse = function() {
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.showFromForEdit = !$ctrl.showFromForEdit;
        };
    });
