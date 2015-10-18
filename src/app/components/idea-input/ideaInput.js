import angular from 'angular';
import {ideaInputComponent} from './ideaInput.component';

let ideaInput = angular.module('ideaInput', [])
    .directive('ideaInput', ideaInputComponent);

export {ideaInput};
