'use strict';

angular
    .module('events')
    .factory('eventsFactory', function() {
        return {
            sendFiltersInputValueToCoursesFilterEvent: 'applyFilter',
            addCourseEvent: 'addCourse',
            editCourseEvent: 'editCourseEvent',
            pushCourseToEditFormEvent: 'pushCourseToEditForm',
            toggleVisibilityFromForAddEvent: 'toggleFromForAdd'
        };
    });
