'use strict';

angular
    .module('durationFromMinutes')
    .filter('durationFromMinutes', function() {
        return function(duration) {
            return duration > 59 ? Math.round(duration / 60) + 'h ' + duration % 60 + 'min' : duration + 'min';
        };
    });
