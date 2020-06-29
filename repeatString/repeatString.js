const repeatString = function(repeatWord, repeatNumber) {
  let repetitousString = repeatNumber < 0 ? 'ERROR' : "";
  for (let i = repeatNumber; i > 0; i--) {
    repetitousString += repeatWord;
  };
  return repetitousString;
};


module.exports = repeatString;


/*

run:
jasmine repeatString.spec.js

*/

// console.log('repetitousString: ', repetitousString);
  //var repetitousString;