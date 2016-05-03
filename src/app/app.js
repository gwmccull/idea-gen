import angular from 'angular';
import $http from 'angular';
//import jqcloud from 'mistic100/angular-jqcloud.git'
//import tangCloud from '/lib/tangCloud/tangCloud.min.js'
import {common} from './common/common';
import {ideaInput} from './components/idea-input/ideaInput';
import {ideaOutput} from './components/idea-output/ideaOutput';
import {ideaResults} from './components/idea-results/ideaResults';

angular.module('app', [
    ideaInput.name,
    ideaOutput.name,
    ideaResults.name,
    common.name //,
    //'tangcloud'
    //'angular-jqcloud'
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
                    <idea-results></idea-results>
                </div>
            `
        }
    });


