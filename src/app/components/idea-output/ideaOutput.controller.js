class IdeaOutputController {
    // inject things here
    constructor(Ideas) {
        this.ideas = Ideas.getIdeas();
        this.IdeasService = Ideas;
    }

    removeIdea(index) {
        this.IdeasService.removeIdea(index);
        this.ideas = this.IdeasService.getIdeas();
    }
}

IdeaOutputController.$inject = ['Ideas'];

export {IdeaOutputController};
