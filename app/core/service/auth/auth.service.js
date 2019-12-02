'use strict';

angular
    .module('auth')
    .service('authService', [ '$http', '$location', '$window', function($http, $location, $window) {
        var users;
        var localStorage = $window.localStorage;
        var userKey = 'user';

        function loadUsersList() {
            $http
                .get('http://localhost:8085/user')
                .then(function(usersData) {
                    users = usersData.data;
                })
                .catch(function() {
                    $http
                        .get('data/users.json')
                        .then(function(usersData) {
                            users = usersData.data;
                        });
                });
        }

        loadUsersList();

        function loginByEmailAndPassword(email, password) {
            var user = getUserByEmailAndPassword(email, password);
            if (!!user) {
                setUser(user);
                $location.path('/courses');
            }
        }

        function getUserByEmailAndPassword(email, password) {
            if (_.isEmpty(email) || _.isEmpty(password)) {
                return undefined;
            }

            return _.find(users, { email: email, password: password });
        }

        function setUser(user) {
            localStorage.setItem(userKey, JSON.stringify(user));
        }

        function getUser() {
            return JSON.parse(localStorage.getItem(userKey));
        }

        function isAuthenticated() {
            return !!getUser();
        }

        function getUserInfo() {
            return getUser().login;
        }

        function logout() {
            localStorage.removeItem(userKey);
            $location.path('/login');
        }

        return {
            loginByEmailAndPassword: loginByEmailAndPassword,
            getUser: getUser,
            isAuthenticated: isAuthenticated,
            logout: logout,
            getUserInfo: getUserInfo
        };
    } ]);
