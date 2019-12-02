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
            $http.delete('http://localhost:8085/course/'+course.id);
        }

        function generateNewId() {
            return (_.parseInt(_.maxBy(courses, 'id').id) + 1).toString();
        }

        return {
            getCourses: getCourses,
            addCourse: addCourse,
            editCourse: updateCourse,
            deleteCourse: removeCourse,
            generateNewId: generateNewId,
            getCourseById: getCourseById
        };
    } ]);
