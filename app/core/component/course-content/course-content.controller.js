'use strict';
angular
    .module('courseContent')
    .controller('CourseContentController', function($rootScope, $scope, courseService) {

        courseService.loadCourses().then(function(coursesData) {
            $rootScope.$broadcast('coursesWasLoaded', coursesData);
        });
    });
