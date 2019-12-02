'use strict';

angular
    .module('editCourseForm')
    .controller('EditCourseFormController', [ 'courseService', 'navigationService', '$state', function(
        courseService,
        navigationService,
        $state
    ) {
        var $ctrl = this;
        $ctrl.courseIsLoaded = !!$ctrl.toEditCourse;

        $ctrl.$onInit = function() {
            courseService.getCourseById($state.params.courseId)
                .then(function(course) {
                    $ctrl.toEditCourse = course;
                    $ctrl.courseDate = new Date($ctrl.toEditCourse.creationDate);
                    $ctrl.coursesIsLoaded = true;
                    $state.current.data.displayName = $ctrl.toEditCourse.title;
                });
        };

        $ctrl.backToHome = navigationService.backToHome;

        $ctrl.editCourse = function() {
            $ctrl.toEditCourse.creationDate = $ctrl.courseDate.toISOString();
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.backToHome();
        };
    } ]);
