
const removeFromArray = function(valuesList, ...values) {
    values.forEach(function(value) {
        for (let i = 0; i < valuesList.length; i++) {
            if (valuesList[i] === value) {
                console.log(
                    'valuesList B4 splice: ', valuesList,
                    'valuesList[i]: ', valuesList[i],
                    //'valuesList.splice(i, 1): ', valuesList.splice(i, 1),                    
                );
                valuesList.splice(i, 1);
                console.log('valuesList AFT splice: ', valuesList);
            };
        };
    }); 
    return valuesList;  
}

module.exports = removeFromArray;


/*
helloWorld x
repeatString x
reverseString x
removeFromArray x
sumAll
leapYears
tempConversion

run:
jasmine removeFromArray.spec.js

*/