/// <reference path="../../typings/angularjs/angular.d.ts" />

import angular from 'angular';

angular.module('app', [])
    .directive('app', () => {
        return {
            restrict: 'E',
            replace: true,
            template: `
                <div>Test</div>
            `
        }
    })