(function () {
    'use strict';

    angular
        .module('uploadFilter')
        .filter('orderByUpload', function() {
            return function(input) {
                console.log(input);
                return input;
            };
        });
})();