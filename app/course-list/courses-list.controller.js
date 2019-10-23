(function () {
    "use strict";

    angular
        .module('courseList')
        .controller('CourseListController', function($rootScope,  courseService) {

            let $ctrl = this;

            courseService.loadCourses().then(
                function(courses) {
                    $ctrl.courses = courses.data;
                    angular.forEach($ctrl.courses, course => {
                        courseService.addDisplayDateAndTimeAfterUpdating(course);
                    });
                });

            $ctrl.coursePullSize = 4;

            $ctrl.increase = function () {
                $ctrl.coursePullSize += 4;
            };

            $rootScope.$on('applyFilter', function (event, data) {
                $ctrl.filterValue = data;
            });

            $rootScope.$on('addCourse', function (event, data) {
                courseService.addDisplayDateAndTimeAfterUpdating(data);
                $ctrl.courses.unshift(data);
            });

            $ctrl.pushCourseToEditForm = function (course) {
                $rootScope.$broadcast('pushCourseToEditForm', course);
            };

            $rootScope.$on('editCourse', function (event, data) {
                let course = {
                    title: data.title,
                    description: data.description,
                    uploadDate: data.uploadDate
                };
                courseService.addDisplayDateAndTimeAfterUpdating(course);

                let index = $ctrl.courses.indexOf(data.selectedCourse);
                if (index !== -1) $ctrl.courses[index] = course;

            });

            $ctrl.deleteCourse = function (course) {
                let index = $ctrl.courses.indexOf(course);
                if (index !== -1) $ctrl.courses.splice(index, 1);
            };

        });
})();