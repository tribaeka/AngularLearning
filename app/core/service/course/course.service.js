'use strict';

angular
    .module('course')
    .factory('courseService', [ '$http', function($http) {
        var courses = [];
        function loadCourses() {
            return $http
                .get('http://localhost:8088/course')
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
        }

        function getList() {
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
            getCourses: getList,
            addCourse: addCourse,
            editCourse: updateCourse,
            deleteCourse: removeCourse,
            generateNewId: generateNewId,
            getCourseById: getCourseById
        };
    } ]);
