'use strict';

angular
    .module('course')
    .factory('courseService', [ '$http', function($http) {
        var courses = [];
        function loadCourses() {
            return $http
                .get('http://localhost:8085/course')
                .then(function(coursesData) {
                    courses = coursesData.data;
                });
        }

        function addCourse(course) {
            courses.unshift(course);
            $http.post(
                'http://localhost:8085/course', JSON.stringify(course), 
                { headers: { 'Content-Type': 'application/json' } }
            );
        }

        function getCourses() {
            return courses;
        }

        function getCourseById(id) {
            if (_.isNumber(id)) id = id.toString();
            $http.get('http://localhost:8085/course/'+ id)
                .then(function(course) {
                    console.log(course);
                });
            return _.find(courses, { id: id.toString() });
        }

        function updateCourse(course) {
            var index = _.findIndex(courses, { id: course.id });
            if (index !== -1) courses[index] = course;
            $http.update('http://localhost:8085/course/'+course.id, JSON.stringify(course))
                .then(function(response) {
                    console.log(response);
                });
        }

        function removeCourse(course) {
            var index = courses.indexOf(course);
            if (index !== -1) courses.splice(index, 1);
            $http.delete('http://localhost:8085/course/'+course.id);
        }

        function generateNewId() {
            return (_.parseInt(_.maxBy(courses, 'id').id) + 1).toString();
        }

        return {
            loadCourses: loadCourses,
            getCourses: getCourses,
            addCourse: addCourse,
            editCourse: updateCourse,
            deleteCourse: removeCourse,
            generateNewId: generateNewId,
            getCourseById: getCourseById
        };
    } ]);
