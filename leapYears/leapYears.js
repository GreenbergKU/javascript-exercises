const leapYears = function(year) {
    let shortYear = year.toString().split("").slice(-2);
    let divisor = shortYear[0] === '0' && shortYear[1] === '0' ? 400 : 4;
    leapYear = year % divisor === 0 ? true : false;
    return leapYear;
}

module.exports = leapYears

/*
helloWorld
repeatString
reverseString
removeFromArray
sumAll
leapYears
tempConversion

run:
jasmine leapYears.spec.js

*/    
    
    // let yearCharacters = year.toString().split("");
    // console.log('yearCharacters: ', yearCharacters);
    // let shortYear = yearCharacters.slice(-2);
    // console.log('shortYear: ', shortYear);