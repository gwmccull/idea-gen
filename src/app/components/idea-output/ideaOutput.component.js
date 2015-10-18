import template from './ideaOutput.html!text';
import {IdeaOutputController as controller} from './ideaOutput.controller';

let ideaOutputComponent = ()=> {
    return {
        controllerAs: 'vm',
        restrict: 'E',
        controller,
        replace: true,
        scope: {},
        template
    };
};

export {ideaOutputComponent};
