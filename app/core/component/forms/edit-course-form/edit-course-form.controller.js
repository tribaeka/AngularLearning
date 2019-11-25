'use strict';

angular
    .module('editCourseForm')
    .controller('EditCourseFormController', [ 'courseService', 'navigationService', '$routeParams', function(
        courseService,
        navigationService,
        $routeParams
    ) {
        var $ctrl = this;

        $ctrl.backToHome = navigationService.backToHome;

        $ctrl.$onChanges = function() {
            $ctrl.toEditCourse = courseService.getCourseById($routeParams.courseId);
            $ctrl.courseDate = new Date($ctrl.toEditCourse.creationDate);
        };

        $ctrl.editCourse = function() {
            $ctrl.toEditCourse.creationDate = $ctrl.courseDate.toISOString();
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.backToHome();
        };
    } ]);
