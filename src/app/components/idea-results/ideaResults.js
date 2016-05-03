import angular from 'angular';
import {ideaResultsComponent} from './ideaResults.component';

let ideaResults = angular.module('ideaResults', [])
    .directive('ideaResults', ideaResultsComponent);

export {ideaResults};
