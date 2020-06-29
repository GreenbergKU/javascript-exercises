const sumAll = function(...numbers) {           
    let numStart = numbers[0] < numbers[1]  ? numbers[0] : numbers[1];
    let numEnd = numStart === numbers[0] ? numbers[1] : numbers[0];
    let i = numEnd;   
    let sum;

    numbers.forEach(function(number) {
        return sum = number < 0 || typeof(number) !== "number" ? "ERROR" : 0 ;
    });

    while (i >= numStart && sum !== "ERROR") {
        sum += i;
        i--;  
    };
    if (sum < 0) {
        sum = "ERROR";
    };
    return sum;
};

module.exports = sumAll;

/*

run:
jasmine sumAll.spec.js

*/

