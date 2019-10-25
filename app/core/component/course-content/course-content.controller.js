(function () {
    "use strict";

    angular
        .module('courseContent')
        .controller('CourseContentController', function($scope, courseService) {
            var $ctrl = this;
            $scope.test = 'hello';
            var courses;
            courseService.loadCourses().then(
                function(response) {
                    courses = response.data;
                    angular.forEach(courses, course => {
                        courseService.addDisplayDateAndTimeAfterUpdating(course);
                    });

                }).then(function () {
                setTimeout(function () {
                    $scope.courses = courses;
                },0);
            });

            console.log($scope.courses);

        });
})();