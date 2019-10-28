'use strict';

angular
    .module('forms')
    .controller('formsController', function($rootScope) {
        let $ctrl = this;

        $rootScope.$on('toggleFromForAdd', function (event, data) {
            $ctrl.showFromForAdd = data;
        });

        $ctrl.addCourse = function () {
            let course = {
                title: $ctrl.courseTitle,
                description: $ctrl.courseDescription,
                uploadDate: new Date().toISOString()
            };

            $rootScope.$broadcast('addCourse', course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
        };

        $rootScope.$on('pushCourseToEditForm', function (event, data) {
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

            $rootScope.$broadcast('editCourse', course);
            $ctrl.courseTitle = '';
            $ctrl.courseDescription = '';
            $ctrl.showFromForEdit = !$ctrl.showFromForEdit;
        };
    });