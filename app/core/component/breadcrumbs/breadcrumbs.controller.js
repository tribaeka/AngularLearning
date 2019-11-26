'use strict';

angular
    .module('breadcrumbs')
    .controller('breadcrumbsController', function($transitions, $state) {
        var $ctrl = this;
        var homeState = $state.get('courses');
        $ctrl.breadcrumbs = [];
        $ctrl.$onInit = function() {
            if ($state.current !== homeState) {
                $ctrl.breadcrumbs.push(homeState);
            }
            $ctrl.breadcrumbs.push($state.current);
            noBreadCrumbPageClearCheck();
        };

        $transitions.onSuccess({}, function() {
            if (_.some($ctrl.breadcrumbs, { data: $state.current.data })) {
                $ctrl.breadcrumbs.splice($ctrl.breadcrumbs.indexOf($state.current, 1));
            } else {
                $ctrl.breadcrumbs.push($state.current);
            }
            console.log($ctrl.breadcrumbs);
            noBreadCrumbPageClearCheck();
        });

        $ctrl.isEmptyCrumb = function isEmptyCrumb(crumb) {
            return !crumb.hasOwnProperty('data');
        };

        function noBreadCrumbPageClearCheck() {
            if ($ctrl.isEmptyCrumb($state.current)) {
                $ctrl.breadcrumbs = [];
            }
        }
    });
