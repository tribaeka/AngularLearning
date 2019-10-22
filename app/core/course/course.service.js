(function () {
    'use strict';

    angular.
    module('course').
    factory('courseService', ['$http', function($http) {
        function loadCourses() {
            return $http.get('data/courses.json')
        }

        return {
            loadCourses : loadCourses
        }
    }]);
})();