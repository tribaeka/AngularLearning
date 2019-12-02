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
                })
                .catch(function() {
                    $http
                        .get('data/courses.json')
                        .then(function(coursesData) {
                            courses = coursesData.data;
                        });
                });
        }

        function addCourse(course) {
            courses.unshift(course);
            console.log(JSON.stringify(course));
            $http.post('http://localhost:8085/course', JSON.stringify(course), { headers: { 'Content-Type': 'application/json' } })
                .then(function(response) {
                    console.log(response);
                });
        }

        function getCourses() {
            return courses;
        }

        function getCourseById(id) {
            if (_.isNumber(id)) id = id.toString();
            
            return _.find(courses, { id: id });
        }

        function updateCourse(course) {
            var index = _.findIndex(courses, { id: course.id });
            if (index !== -1) courses[index] = course;
        }

        function removeCourse(course) {
            var index = courses.indexOf(course);
            if (index !== -1) courses.splice(index, 1);
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
