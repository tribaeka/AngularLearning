'use strict';

angular
    .module('course')
    .factory('courseService', [ '$http', function($http) {
        var courses = [];
        function loadCourses() {
            return $http
                .get('data/courses.json')
                .then(function(coursesData) {
                    courses = coursesData.data;
                });
        }

        function addCourse(data) {
            courses.unshift(data);
        }

        function getCourses() {
            return courses;
        }

        function editCourse(data) {
            var index = _.findIndex(courses, { id: data.id });
            if (index !== -1) courses[index] = data;
        }

        function deleteCourse(course) {
            var index = courses.indexOf(course);
            if (index !== -1) courses.splice(index, 1);
        }

        return {
            loadCourses: loadCourses,
            getCourses: getCourses,
            addCourse: addCourse,
            editCourse: editCourse,
            deleteCourse: deleteCourse
        };
    } ]);
