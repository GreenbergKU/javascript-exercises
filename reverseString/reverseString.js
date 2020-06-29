const reverseString = function(phrase) {
        //console.log('phrase.split(""): ', phrase.split(""));
    let characters = phrase.split("");
    for (let i = 1; i < phrase.length; i++) {
        characters.unshift(characters.splice(i, 1));
        console.log('characters (insideLoop): ', characters);
    };
    let reversePhrase = characters.join("");
    //console.log('reversePhrase (outsideLoop): ', reversePhrase);
    return reversePhrase    
};    
//reverseString("Hello World");
module.exports = reverseString;

/*
helloWorld
repeatString
reverseString
removeFromArray
sumAll
leapYears
tempConversion

run:
jasmine reverseString.spec.js

*/

    // console.log('phrase: ', phrase);
    // console.log('phrase.slice(1, 2): ', phrase.slice(1, 2));
    //var phraseCharacters;
    // for (var i = 1; i < phrase.length; i++) {
    //     "".concat(phrase.slice(i, i++), phrase);
    //     console.log('phrase (insideLoop): ', phrase);
    // };
    // console.log('phrase (outsideLoop): ', phrase);
    // return phrase

