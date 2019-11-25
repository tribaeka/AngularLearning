'use strict';

angular
    .module('events')
    .factory('eventsFactory', function() {
        return {
            sendFiltersInputValueToCoursesFilterEvent: 'applyFilter',
            addCourseEvent: 'addCourse',
            courseExchangeWithEditForm: 'courseExchangeWithEditForm',
            courseUpdated: 'courseUpdated'
        };
    });
