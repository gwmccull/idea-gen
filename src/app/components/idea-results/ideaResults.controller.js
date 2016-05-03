class IdeaResultsController {
    // inject things here
    constructor(Ideas) {
        //this.results = Ideas.getResults(numResults);
        this.IdeasService = Ideas;
        this.getResults = Ideas.getResults;
        this.numResults = 20;
        this.words = [
            {id: 1, word: "oke", size: 1},
            {id: 2, word: "blabla", size: 6},
            {id: 3, word: "test", size: 7},
            {id: 4, word: "schaap", size: 2},
            {id: 5, word: "deployment", size: 10},
            {id: 6, word: "woord3", size: 3},
            {id: 7, word: "wogamalord4", size: 4},
            {id: 8, word: "woord5", size: 5},
            {id: 9, word: "woord8", size: 8},
            {id: 10, word: "woord9", size: 9},
            {id: 1, word: "oke", size: 1},
            {id: 2, word: "blabla", size: 6},
            {id: 3, word: "test", size: 7},
            {id: 4, word: "schaap", size: 2},
            {id: 5, word: "deployment", size: 10},
            {id: 6, word: "woord3", size: 3},
            {id: 7, word: "wogamalord4", size: 4},
            {id: 8, word: "woord5", size: 5},
            {id: 9, word: "woord8", size: 8},
            {id: 10, word: "woord9", size: 9},
            {id: 1, word: "oke", size: 1},
            {id: 2, word: "blabla", size: 6},
            {id: 3, word: "test", size: 7},
            {id: 4, word: "schaap", size: 2},
            {id: 5, word: "deployment", size: 10},
            {id: 6, word: "woord3", size: 3},
            {id: 7, word: "wogamalord4", size: 4},
            {id: 8, word: "woord5", size: 5},
            {id: 9, word: "woord8", size: 8},
            {id: 10, word: "woord9", size: 9},
            {id: 1, word: "oke", size: 1},
            {id: 2, word: "blabla", size: 6},
            {id: 3, word: "test", size: 7},
            {id: 4, word: "schaap", size: 2},
            {id: 5, word: "deployment", size: 10}
        ];
    }

    removeIdea(index) {
        //this.IdeasService.removeIdea(index);
        //this.ideas = this.IdeasService.getIdeas();
    }


}

IdeaResultsController.$inject = ['Ideas'];

export {IdeaResultsController};
