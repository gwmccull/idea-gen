export const Strings = () => {
    return {
        countWords: countWords,
        stripBoringWords: stripBoringWords,
        sortWords: sortWords,
        removeExtraSpaces: removeExtraSpaces,
        removeHtml: removeHtml
    };

    function countWords(string) {
        var result = {};
        string.split(' ').forEach((word, index, arr) => {
            result[word] = result[word] + 1 || 1;
        });
        return result;
    }

    function stripBoringWords(string) {
        return string
            .replace(/(?:^|\s)(a|an|is|for|the|I|by|with|it|we|him|her|his|she|he|be|of|and|or|in|to|s|was|that|on|at|from|as|p|pp|ISBN|which|has|had|–|this|would|not|b|were|also)(?=\s|$)/ig, ' ');
    }

    function sortWords(obj) {
        let result = [];

        for (let key in obj) {
            //console.log("key", key);
            let index;

            for (index = 0; index < result.length; index++) {
                if (obj[key] >= result[index].size) {
                    break;
                }
            }

            result.splice(index, 0, {word: key, size: obj[key]})
        }

        return result;
    }

    function removeExtraSpaces(string) {
        return string.replace(/\s+/g, ' ');
    }

    function removeHtml(string) {

    }
};

//Strings.$inject = ['$http'];
