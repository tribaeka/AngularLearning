'use strict';

angular
    .module('course')
    .factory('courseService', [ '$http', function($http) {
        var courses = [];
        function loadCourses() {
            return $http
                .get('data/courses.json')
                .then(function(coursesData) {
                    angular.forEach(coursesData.data, function(course) {
                        addDisplayDateAndDuration(course);
                    });
                    courses = coursesData.data;
                });
        }

        function addCourse(data) {
            addDisplayDateAndDuration(data);
            courses.unshift(data);
        }

        function getCourses() {
            return courses;
        }

        function editCourse(data) {
            addDisplayDateAndDuration(data);
            var index = courses.indexOf(data.selectedCourse);
            if (index !== -1) courses[index] = data;
        }

        function deleteCourse(course) {
            var index = courses.indexOf(course);
            if (index !== -1) courses.splice(index, 1);
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
            getCourses: getCourses,
            addCourse: addCourse,
            editCourse: editCourse,
            deleteCourse: deleteCourse
        };
    } ]);
