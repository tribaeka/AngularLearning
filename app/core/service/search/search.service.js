'use strict';

angular
    .module('search')
    .factory('searchService', [ '$http', function($http) {

        function executeCourseSearch(query) {
            return $http
                .get('http://localhost:8085/course?query=' + query)
                .then(function(searchResults) {
                    return searchResults.data;
                });
        }

        return {
            executeCourseSearch: executeCourseSearch
        };
    } ]);
