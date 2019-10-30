'use strict';

angular
    .module('courseControl')
    .controller('CourseControlController', function($rootScope) {
        // eslint-disable-next-line consistent-this,no-invalid-this
        var $ctrl = this;
        var sendFiltersInputValueToCoursesFilterEvent = 'applyFilter';
        var toggleVisibilityFromForAddEvent = 'toggleFromForAdd';
        $ctrl.showFromForAdd = false;

        $ctrl.applyFilter = function() {
            console.log('filter value = ' + $ctrl.inputFilterValue);
            $rootScope.$broadcast(sendFiltersInputValueToCoursesFilterEvent, $ctrl.inputFilterValue);
            $ctrl.inputFilterValue = '';
        };

        $ctrl.toggleFromForAdd = function() {
            $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
            $rootScope.$broadcast(toggleVisibilityFromForAddEvent, $ctrl.showFromForAdd);
        };
    });
