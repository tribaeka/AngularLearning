'use strict';

angular
    .module('auth')
    .service('authService', [ '$http', '$location', function($http, $location) {
        var currentUser;
        var users;

        function loadUsersList() {
            return $http
                .get('data/users.json')
                .then(function(usersData) {
                    users = usersData.data;
                });
        }
        loadUsersList();

        function loginByEmailAndPassword(email, password) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    currentUser = users[i];
                    console.log('logged in successfully');
                    $location.path('/');

                    return true;
                }
            }

            return false;
        }

        function getCurrentUser() {
            return currentUser;
        }

        function currentUserIsExist() {
            return !currentUser;
        }

        function getFullName() {
            return currentUser.firstName + ' ' + currentUser.lastName;
        }

        function getUserInfo() {
            return currentUser.login;
        }

        function logout() {
            currentUser = undefined;
        }

        return {
            loginByEmailAndPassword: loginByEmailAndPassword,
            getCurrentUser: getCurrentUser,
            getFullName: getFullName,
            isAuthenticated: currentUserIsExist,
            logout: logout,
            getUserInfo: getUserInfo
        };
    } ]);
