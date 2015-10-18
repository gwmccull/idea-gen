const defaultContent = 'nothing';

class IdeaInputController {
    // inject things here
    constructor(Ideas) {
        this.newIdea = '';
        this.ideas = Ideas;
    }

    createNote(content = defaultContent) {
        // will use this later
        this.ideas.createIdea({content: content});
        this.newIdea = '';
    }
}

IdeaInputController.$inject = ['Ideas'];

export {IdeaInputController};
