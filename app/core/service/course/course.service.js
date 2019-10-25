(function () {
    'use strict';

    angular
        .module('course')
        .factory('courseService', ['$http', function($http) {
            function loadCourses() {
                return $http.get('data/courses.json');
            }

            function addDisplayDateAndTimeAfterUpdating(course) {
                var currentDate = new Date();
                var uploadDate = new Date(course.uploadDate);
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
                course.uploadTime = uploadDate.getTime();
            }

            function dateToDisplayDate(date) {
                return ((date.getMonth() + 1) < 10 ? '0'+ (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' +
                    (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) + '.' +
                    date.getFullYear();
            }
            return {
                loadCourses : loadCourses,
                addDisplayDateAndTimeAfterUpdating : addDisplayDateAndTimeAfterUpdating
            }
        }]);
})();