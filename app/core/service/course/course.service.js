'use strict';

angular
    .module('course')
    .factory('courseService', [ '$http', function($http) {
        function getCourses() {
            return $http
                .get('http://localhost:8085/course')
                .then(function(coursesData) {
                    return coursesData.data;
                });
        }

        function addCourse(course) {
            $http.post(
                'http://localhost:8085/course', JSON.stringify(course), 
                { headers: { 'Content-Type': 'application/json' } }
            );
        }

        function getCourseById(id) {
            return $http
                .get('http://localhost:8085/course/'+ id)
                .then(function(courseAsAnswer) {
                    return courseAsAnswer.data;
                });
        }

        function updateCourse(course) {
            $http.put('http://localhost:8085/course/'+course.id, JSON.stringify(course))
                .then(function(response) {
                    console.log(response);
                });
        }

        function removeCourse(course) {
            return $http.delete('http://localhost:8085/course/'+course.id);
        }

        return {
            getCourses: getCourses,
            addCourse: addCourse,
            editCourse: updateCourse,
            deleteCourse: removeCourse,
            getCourseById: getCourseById
        };
    } ]);
