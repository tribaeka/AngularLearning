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
            if (_.isEmpty(courseService.getCourses())) {
                courseService.loadCourses()
                    .then(function() {
                        init();
                    });
            } else {
                init();
            }
        };

        $ctrl.backToHome = navigationService.backToHome;

        $ctrl.editCourse = function() {
            $ctrl.toEditCourse.creationDate = $ctrl.courseDate.toISOString();
            courseService.editCourse($ctrl.toEditCourse);
            $ctrl.backToHome();
        };

        function init() {
            $ctrl.toEditCourse = courseService.getCourseById($state.params.courseId);
            console.log($ctrl.toEditCourse);
            $ctrl.courseDate = new Date($ctrl.toEditCourse.creationDate);
            $ctrl.coursesIsLoaded = true;
            $state.current.data.displayName = $ctrl.toEditCourse.title;
        }
    } ]);
