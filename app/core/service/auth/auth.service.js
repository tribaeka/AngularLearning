'use strict';

angular
    .module('auth')
    .service('authService', [ '$http', '$location', '$window', function($http, $location, $window) {
        var users;
        var localStorage = $window.localStorage;
        var userKey = 'user';

        function loadUsersList() {
            return $http
                .get('data/users.json')
                .then(function(usersData) {
                    users = usersData.data;
                });
        }

        loadUsersList();

        function loginByEmailAndPassword(email, password) {
            if (_.isEmpty(email) || _.isEmpty(password)) {
                return false;
            }
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    localStorage.setItem(userKey, JSON.stringify(users[i]));
                    console.log('logged in successfully');
                    $location.path('/');

                    return true;
                }
            }

            return false;
        }

        function getUser() {
            return JSON.parse(localStorage.getItem(userKey));
        }

        function isAuthenticated() {
            return getUser() !== null;
        }

        function getUserInfo() {
            return getUser().login;
        }

        function logout() {
            localStorage.removeItem(userKey);
        }

        return {
            loginByEmailAndPassword: loginByEmailAndPassword,
            getUser: getUser,
            isAuthenticated: isAuthenticated,
            logout: logout,
            getUserInfo: getUserInfo
        };
    } ]);
