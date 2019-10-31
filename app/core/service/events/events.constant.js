'use strict';

angular
    .module('events')
    .constant('sendFiltersInputValueToCoursesFilterEvent', 'applyFilter')
    .constant('addCourseEvent', 'addCourse')
    .constant('editCourseEvent', 'editCourse')
    .constant('pushCourseToEditFormEvent', 'pushCourseToEditForm')
    .constant('toggleVisibilityFromForAddEvent', 'toggleFromForAdd');
