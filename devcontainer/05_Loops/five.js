// for Each loop

const coding = ["javascript", "java", "python", "cpp"]

coding.forEach( function (item) {
    //console.log(item);
})

// use arrow function

coding.forEach(  (item) => {
    //console.log(item);
})

function printme(item) {
    console.log(item);
}
coding.forEach(printme)

// check all value

coding.forEach(  (item, index, arr) => {
    console.log(item, index, arr);
})

// array ka ander object ka use 

const mycoding = [
    {
        languagename: "javascript",
        languageFilename: "js"
    },

    {
        languagename: "python",
        languageFilename: "py"
    },

    {
        languagename: "java",
        languageFilename: "java"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageFilename);
    
})


