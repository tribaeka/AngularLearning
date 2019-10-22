(function () {
    "use strict";

    angular
        .module('courseList')
        .controller('CourseListController', function($http, courseService, uploadFilter) {
            let $ctrl = this;

            courseService.loadCourses().then(
                function(courses) {
                    $ctrl.courses = courses.data;
                    angular.forEach($ctrl.courses, course => {
                        addDisplayDateAndTimeAfterUpdating(course);
                    });
                });

            $ctrl.coursePullSize = 4;
            $ctrl.increase = function () {
                $ctrl.coursePullSize += 4;
            };

            $ctrl.applyFilter = function () {
              $ctrl.filterValue = $ctrl.inputFilterValue;
            };

            $ctrl.addCourse = function() {
                let course = {
                    title: $ctrl.courseTitle,
                    description: $ctrl.courseDescription,
                    uploadDate: new Date().toISOString()
                };
                addDisplayDateAndTimeAfterUpdating(course);
                $ctrl.courses.push(course);
            };

            $ctrl.uploadOrder = uploadFilter;

            function addDisplayDateAndTimeAfterUpdating(course) {
                let currentDate = new Date();
                let uploadDate = new Date(course.uploadDate);
                course.displayDate = dateToDisplayDate(uploadDate);
                if (dateToDisplayDate(currentDate) === course.displayDate){
                    if (currentDate.getMinutes() === uploadDate.getMinutes()){
                        course.timeAfterUpdate = "Less than a minute ago";
                    }else if (currentDate.getHours() === uploadDate.getHours()){
                        course.timeAfterUpdate = "In " + (currentDate.getMinutes() - uploadDate.getMinutes()) + "min";
                    }else {
                        course.timeAfterUpdate = "In " + (currentDate.getHours() - uploadDate.getHours()) + "hrs";
                    }
                }else {
                    course.timeAfterUpdate = "More than a day ago";
                }
                course.uploadDate = uploadDate;
            }

            function dateToDisplayDate(date) {
                return ((date.getMonth() + 1) < 10 ? '0'+ (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' +
                        (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) + '.' +
                    date.getFullYear();
            }
        });
})();