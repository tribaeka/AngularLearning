'use strict';
angular
    .module('courseContent')
    .controller('CourseContentController', function($rootScope, $scope, courseService) {
        var courses;
        courseService.loadCourses().then(function(response) {
            courses = response.data;
            angular.forEach(courses, function(course) {
                courseService.addDisplayDateAndTimeAfterUpdating(course);
            });
            $rootScope.$broadcast('coursesWasLoaded', courses);
        });
    });
