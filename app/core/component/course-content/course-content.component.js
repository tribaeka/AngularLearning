'use strict';

angular
    .module('courseContent')
    .component('courseContent', {
        template: '<course-control></course-control>' +
            '<forms></forms>' +
            '<course-list></course-list>',
        controller: 'CourseContentController'
    });
