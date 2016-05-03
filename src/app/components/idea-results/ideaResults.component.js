import template from './ideaResults.html!text';
import './ideaResults.css!';
import '/lib/tangCloud/tangCloud.css!';
import {IdeaResultsController as controller} from './ideaResults.controller';

let ideaResultsComponent = ()=> {
    return {
        controllerAs: 'vm',
        restrict: 'E',
        controller,
        replace: true,
        scope: {},
        template
    };
};

export {ideaResultsComponent};
