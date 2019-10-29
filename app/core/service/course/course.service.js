'use strict';

angular
    .module('course')
    .factory('courseService', [ '$http', function($http) {
        function loadCourses() {
            return $http.get('data/courses.json');
        }

        function addDisplayDateAndDuration(course) {
            var uploadDate = new Date(course.uploadDate);
            course.displayDate = dateToDisplayDate(uploadDate);
            course.displayDuration = toDisplayDuration(course.duration);
            course.uploadDate = uploadDate;
            course.uploadTime = uploadDate.getTime();
        }

        function dateToDisplayDate(date) {
            return ((date.getMonth() + 1) < 10 ? '0'+ (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' +
                (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) + '.' +
                date.getFullYear();
        }

        function toDisplayDuration(duration) {
            return duration > 59 ? Math.round(duration / 60) + 'h ' + duration % 60 + 'min' : duration + 'min';
        }

        return {
            loadCourses: loadCourses,
            addDisplayDateAndTimeAfterUpdating: addDisplayDateAndDuration
        };
    } ]);
