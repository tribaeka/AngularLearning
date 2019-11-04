'use strict';

angular
    .module('stateBy')
    .directive('stateByDate', function() {
        return {
            restrict: 'A',
            scope: {
                stateByDate: '='
            },
            link: function(scope, element) {
                var creationDate = moment(scope.stateByDate.uploadDate);
                var currentDate = moment();
                var freshMomentDate = moment().subtract(14, 'days');

                if (moment(creationDate).isSameOrAfter(freshMomentDate)
                    && moment(creationDate).isBefore(currentDate)) {
                    element[0].classList.add('fresh-border');
                } else if (moment(creationDate).isAfter(currentDate)) {
                    element[0].classList.add('upcoming-border');
                } else {
                    element[0].classList.add('default-border');
                }
            }
        };
    });
