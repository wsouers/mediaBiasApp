console.log("heyyyybabe");

const siteContent = document.body.innerHTML;
console.log(siteContent);

let wordList = [ 
    {
        biasWord: "regime",
        content: "regime is a word used to describe a government that the united states doesn't approve of. It is used as an alternative to the word government to give a bad connotation to dangerous rogue regimes that are corrupt and authoritarian"
    },
    {
        biasWord: "rogue state",
        content: "bla b;a bla testy test etts tes test"
    }
]

function wordSearch(word) {



}

/* 
1) access inner html of entire webpage 
2) create array of objects containing word and description
3) create function that takes an input to search the page for instance of a string
    append html floatbox onto end of word (activated on mouse hover)
    fill html floatbox with content from object with description of bias
4) loop function calling each word in object array
*/