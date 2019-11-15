'use strict';

angular
    .module('durationFromMinutes')
    .filter('durationFromMinutes', function() {
        return function(duration) {
            if (duration > 59) {
                if (duration % 60 === 0) {
                    return Math.round(duration / 60) + 'h ';
                }
                
                return Math.round(duration / 60) + 'h ' + duration % 60 + 'min';
            }
            
            return duration + 'min';
        };
    });
