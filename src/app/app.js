import angular from 'angular';
import $http from 'angular';
import {common} from './common/common';
import {ideaInput} from './components/idea-input/ideaInput';
import {ideaOutput} from './components/idea-output/ideaOutput';

angular.module('app', [
    ideaInput.name,
    ideaOutput.name,
    common.name
])
    .directive('app', ()=> {
        return {
            restrict: 'E',
            replace: true,
            template: `
                <div class="container-fluid">
                    <h1 class="text-center">Idea Generator</h1>
                    <idea-input></idea-input>
                    <idea-output></idea-output>
                </div>
            `
        }
    });


