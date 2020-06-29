const ftoc = function(tempF) {
  let degreesC = (tempF - 32) * 5 / 9;
  let convertedTempC = degreesC.toFixed(1);
    console.log('convertedTempC: ', convertedTempC);
  return Number(convertedTempC);
};

const ctof = function(tempC) {
  let degreesF = (tempC * 9/5) + 32;
  let convertedTempF = degreesF.toFixed(1);
    console.log('convertedTempF: ', convertedTempF);
  return Number(convertedTempF);
};


module.exports = {
  ftoc,
  ctof
}


/*

run:
jasmine tempConversion.spec.js

*/

// PSEUDO-CODE:
// both functions are identical after conversions are made
// math equations for conversions seperately and then complete both functions at same time

// °F to °C	
// tempConversionC(tempF): 
// Deduct 32, then multiply by 5, divide by 9
//                   let degreesC;    < (tempF - 32) * 5 / 9)  >

// °C to °F 
// tempConversionF(tempC): 
// Divide by 5, multiply by 9, then add 32 
//                    let degreesF;   < (tempC / 5 * 9) + 32 >
// 

// BOTH ** tempConversion(temp) **
// Round off to (1) decimal point     < degrees.toFixed(1) >
// return (convert string > Number)   < Number(convertedTemp) >