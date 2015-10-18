import angular from 'angular';
import {Ideas} from './ideas';

export let common = angular.module('common', [])
    .factory('Ideas', Ideas);
