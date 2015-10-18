import angular from 'angular';
import {ideaOutputComponent} from './ideaOutput.component';

let ideaOutput = angular.module('ideaOutput', [])
    .directive('ideaOutput', ideaOutputComponent);

export {ideaOutput};
