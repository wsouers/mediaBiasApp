let wordList = [{
        biasWord: "regime",
        content: "do do da da da da dee dum lorem ipsum i dont know latin whoops"
    },
    {
        biasWord: "rogue state",
        content: "bla b;a bla testy test etts tes test"
    },
    {
        biasWord: "sanction",
        content: "bla b;a bla testy test etts tes test"
    },
]

function biasFixer() {
    for (i = 0; i < wordList.length; i++) {
        let regex = new RegExp(wordList[i].biasWord, "gi");
        let res = document.body.innerHTML.replace(regex, function() {
            return "<div class=\"tooltip\">" + wordList[i].biasWord + "<span class=\"tooltip tooltiptext\">" + wordList[i].content + "</span>" + "</div>" 
        });
        document.body.innerHTML = res;
    }
    return res;
}

biasFixer();





/* 
1) access inner html of entire webpage 
2) create array of objects containing word and description
3) create function that takes an input to search the page for instance of a string
    append html floatbox onto end of word (activated on mouse hover)
    fill html floatbox with content from object with description of bias
4) loop function calling each word in object array
*/