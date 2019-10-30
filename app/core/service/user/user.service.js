'use strict';

angular
    .module('user')
    .factory('userService', [ '$http', function($http) {

        function loadUser() {
            return $http.get('data/user.json');
        }

        function getFullName(user) {
            if (user === undefined) return;

            return user.firstName + ' ' + user.lastName;
        }

        return {
            loadUser: loadUser,
            getFullName: getFullName
        };
    } ]);
