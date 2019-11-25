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
                var creationDate = moment(scope.stateByDate.creationDate);
                var currentDate = moment();
                var freshMomentDate = moment().subtract(14, 'days');

                switch (true) {
                    case (isFresh()):
                        element[0].classList.add('fresh-border');
                        break;
                    case (isUpcoming()):
                        element[0].classList.add('upcoming-border');
                        break;
                    default: element[0].classList.add('default-border');
                }

                function isFresh() {
                    return moment(creationDate).isSameOrAfter(freshMomentDate)
                        && moment(creationDate).isBefore(currentDate);
                }
                function isUpcoming() {
                    return moment(creationDate).isAfter(currentDate);
                }
            }
        };
    });
