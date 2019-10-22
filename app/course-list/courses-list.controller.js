(function () {
    "use strict";

    angular.module('courseList')
        .controller('CourseListController', function($http, courseService) {
            let $ctrl = this;

            $ctrl.coursePullSize = 4;
            $ctrl.increase = function () {
                $ctrl.coursePullSize += 4;
            };

            courseService.loadCourses().then(
                function(courses) {
                    $ctrl.courses = courses.data;
                    angular.forEach($ctrl.courses, course => {
                        let currentDate = new Date();
                        let uploadDate = new Date(course.uploadDate);
                        course.displayDate = dateToDisplayDate(uploadDate);
                        if (dateToDisplayDate(currentDate) === course.displayDate){
                            if (currentDate.getHours() === uploadDate.getHours()){
                                course.timeAfterUpdate = "In " + (currentDate.getMinutes() - uploadDate.getMinutes()) + "min";
                            }else {
                                course.timeAfterUpdate = "In " + (currentDate.getHours() - uploadDate.getHours()) + "hrs";
                            }
                        }else {
                            course.timeAfterUpdate = "More than a day ago";
                        }
                    });
                });

            function dateToDisplayDate(date) {
                return ((date.getMonth() + 1) < 10 ? '0'+ (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' +
                        (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) + '.' +
                    date.getFullYear();
            }
        });
})();