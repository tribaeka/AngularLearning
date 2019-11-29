'use strict';

angular
    .module('courseControl')
    .controller('CourseControlController', function($rootScope, $state, eventsFactory, authService) {
        var $ctrl = this;
        $ctrl.applyFilter = function() {
            console.log('filter value = ' + $ctrl.inputFilterValue);
            $rootScope.$broadcast(eventsFactory.sendFiltersInputValueToCoursesFilterEvent, $ctrl.inputFilterValue);
            $ctrl.inputFilterValue = '';
        };

        $ctrl.toggleFormForAdd = function() {
            $rootScope.$broadcast(eventsFactory.toggleVisibilityFormForAddEvent);
        };

        $ctrl.getLinkUrl = function() {
            if (authService.isAuthenticated()) {
                return $state.href('addCourse');
            } 
            
            return $state.href('login');
            
        };
    });
