import {Strings} from './strings';

const Ideas = ($http) => {
    let ideas = [
        {content: "Albert Einstein"}
    ];

    let strings = new Strings();

    return {
        getIdeas: getIdeas,
        createIdea: createIdea,
        removeIdea: removeIdea,
        getResults: getResults
    };

    function getIdeas() {
        searchIdeas();
        return ideas;
    }

    function createIdea(idea) {
        //console.log("createIdea", idea);
        //console.log("ideas", ideas);
        ideas.push(idea);
    }

    function removeIdea(arrIndex) {
        ideas = ideas.filter((element, index, arr) => {
            console.log("index", index);
            return index !== arrIndex;
        });
    }

    function searchIdeas() {
        ideas.map((idea, index, arr) => {
            $http({
                url: 'http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Albert%20Einstein&rnlimit=1&rawcontinue&format=json&callback=JSON_CALLBACK',
                method: 'jsonp'
            }).success(function(response) {
                idea.response = response;
                //console.log('query', response);
                $http({
                    url: `https://en.wikipedia.org/w/api.php?action=parse&prop=text&page=${idea.response.query.search[0].title.replace(' ', '_')}&format=json&callback=JSON_CALLBACK`,
                    method: 'jsonp'
                })
                    .then((response) => {
                        idea.response.text = response;
                        idea.response.parsedText = response.data.parse.text['*']
                            .replace(/<(?:.|\n)*?>/gm, '')
                            .replace(/\[(\d+|edit)\]/g, ' ')
                            .replace(/&#160;/g, ' ')
                            .replace(/&amp;/g, ' ')
                            .replace(/[.,'"’‘;:\/*+?^${}()|[\]\\]/g, ' ')
                            .replace(/\s-\s/g, ' ');
                        //console.log("parsedText", idea.response.parsedText)
                        idea.response.cleanedText = strings.stripBoringWords(idea.response.parsedText);
                        idea.response.cleanedText = strings.removeExtraSpaces(idea.response.cleanedText);
                        //idea.response.cleanedText = strings.stripBoringWords("asdf bob bob");
                        //console.log("cleanedText", idea.response.cleanedText)
                        idea.response.words = strings.countWords(idea.response.cleanedText);
                        //console.log("words", idea.response.words);
                        idea.response.sortedWords = strings.sortWords(idea.response.words);
                        //console.log("sorted words", idea.response.sortedWords);
                    });
                //$scope.response = response;
            });
        })
    }

    function getResults(numResults) {
        if (ideas[0] && ideas[0].response && ideas[0].response.sortedWords) {
            return ideas[0].response.sortedWords.slice(0, numResults);
        } else {
            return null;
        }
    }
};

Ideas.$inject = ['$http'];

export {Ideas};