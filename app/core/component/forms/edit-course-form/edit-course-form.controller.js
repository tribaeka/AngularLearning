'use strict';

angular
    .module('editCourseForm')
    .controller('EditCourseFormController', [ 'courseService', 'navigationService', '$state', function(
        courseService,
        navigationService,
        $state
    ) {
        var $ctrl = this;

        $ctrl.backToHome = navigationService.backToHome;

        $ctrl.$onChanges = function() {
            $ctrl.toEditCourse = courseService.getCourseById($state.params.courseId);
            $ctrl.courseDate = new Date($ctrl.toEditCourse.creationDate);

        };

        $ctrl.editCourse = function() {
            $ctrl.toEditCourse.creationDate = $ctrl.courseDate.toISOString();
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.backToHome();
        };
    } ]);
