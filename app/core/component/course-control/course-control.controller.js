'use strict';

angular
    .module('courseControl')
    .controller('CourseControlController', function($rootScope) {
        var $ctrl = this;
        var applyFilterEvent = 'applyFilter';
        var toggleFromForAddEvent = 'toggleFromForAdd';
        $ctrl.showFromForAdd = false;
        $ctrl.applyFilter = function() {
            console.log('filter value = ' + $ctrl.inputFilterValue);
            $rootScope.$broadcast(applyFilterEvent, $ctrl.inputFilterValue);
            $ctrl.inputFilterValue = '';
        };
        $ctrl.toggleFromForAdd = function() {
            $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
            $rootScope.$broadcast(toggleFromForAddEvent, $ctrl.showFromForAdd);
        };
    });
