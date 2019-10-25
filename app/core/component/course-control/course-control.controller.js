(function () {
    "use strict";

    angular
        .module('courseControl')
        .controller('CourseControlController', function($rootScope) {
            var $ctrl = this;
            $ctrl.showFromForAdd = false;
            $ctrl.applyFilter = function () {
                $rootScope.$broadcast('applyFilter', $ctrl.inputFilterValue);
                $ctrl.inputFilterValue = '';
            };
            $ctrl.toggleFromForAdd = function () {
                $ctrl.showFromForAdd = !$ctrl.showFromForAdd;
                $rootScope.$broadcast('toggleFromForAdd', $ctrl.showFromForAdd);
            }
        });
})();