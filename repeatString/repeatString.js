var repeatString = function(repeatWord, repeatNumber) {
  var repetitousString;
  repetitousString = repeatNumber < 0 ? 'ERROR' : "";
    console.log('repetitousString: ', repetitousString);
  for (var i = repeatNumber; i > 0; i--) {
    repetitousString += repeatWord;
  };
  return repetitousString
};

module.exports = repeatString;

/*
helloWorld
repeatString
reverseString
removeFromArray
sumAll
leapYears
tempConversion

run:
jasmine repeatString.spec.js
*/