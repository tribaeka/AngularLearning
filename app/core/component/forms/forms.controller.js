'use strict';

angular
    .module('forms')
    .controller('formsController', function($rootScope) {
        var $ctrl = this;
        var toggleFromForAddEvent = 'toggleFromForAdd';
        var addCourseEvent = 'addCourse';
        var editCourseEvent = 'editCourse';
        var pushCourseToEditFormEvent = 'pushCourseToEditForm';
        $rootScope.$on(toggleFromForAddEvent, function (event, data) {
            $ctrl.showFromForAdd = data;
        });

        $ctrl.addCourse = function () {
            var course = {
                title: $ctrl.courseTitle,
                description: $ctrl.courseDescription,
                uploadDate: new Date().toISOString()
            };

            $rootScope.$broadcast(addCourseEvent, course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
        };

        $rootScope.$on(pushCourseToEditFormEvent, function (event, data) {
            $ctrl.selectedCourse = data;
            $ctrl.courseTitleToEdit = data.title;
            $ctrl.courseDescriptionToEdit = data.description;
            $ctrl.courseUploadDateToEdit = data.uploadDate;
            $ctrl.showFromForEdit = true;
        });

        $ctrl.editCourse = function () {
            let course = {
                title: $ctrl.courseTitleToEdit,
                description: $ctrl.courseDescriptionToEdit,
                uploadDate: $ctrl.courseUploadDateToEdit,
                selectedCourse: $ctrl.selectedCourse
            };

            $rootScope.$broadcast(editCourseEvent, course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.showFromForEdit = !$ctrl.showFromForEdit;
        };
    });