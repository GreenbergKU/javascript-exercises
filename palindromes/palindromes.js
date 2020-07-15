const palindromes = function(str) {
    const cleanStr = clean(str);
    for (let i = 0; i < cleanStr.length / 2; i++) {
        return cleanStr[i] !== cleanStr[cleanStr.length-1-i] ? false:true;   
    };     
};

function clean(str) {
    const regExp = /[^A-Za-z0-9]/g;
    return str.toLowerCase().replace(regExp, '');
};

module.exports = palindromes

/*
//// JASMINE TEST: TERMINAL ////

	jasmine palindromes.spec.js


//// DIRECTIONS ////

- Write a function that determines whether or not a given string is a palindrome.

- A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:


//// EXERCISES ////

X	calculator
X	palindromes
	caesar
	fibonacci
	getTheTitles
	findTheOldest
		
	(answers = ‘solutions’ branch of repo)
*/

//// REMOVED COMMENTS ////

// const palindromes = function(str) {
    // console.log('str: ', str, 'cleanStr: ', cleanStr);
// }

// clean(str) 
    // console.log(
    //     'clean(str): ', str.toLowerCase().replace(regExp, "", 
    //     'str= ', str
    // );