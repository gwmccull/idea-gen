import template from './ideaInput.html!text';
import {IdeaInputController as controller} from './ideaInput.controller';

let ideaInputComponent = ()=> {
    return {
        controllerAs: 'vm',
        restrict: 'E',
        controller,
        replace: true,
        scope: {},
        template
    };
};

export {ideaInputComponent};
