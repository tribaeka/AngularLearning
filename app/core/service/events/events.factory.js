'use strict';

angular
    .module('events')
    .factory('eventsFactory', function() {
        return {
            sendFiltersInputValueToCoursesFilterEvent: 'applyFilter',
            addCourseEvent: 'addCourse',
            pushCourseToEditFormEvent: 'pushCourseToEditForm',
            toggleVisibilityFromForAddEvent: 'toggleFromForAdd'
        };
    });
