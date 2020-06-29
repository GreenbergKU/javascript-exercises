const removeFromArray = function(valuesList, ...values) {
    values.forEach(function(value) {
        for (let i = 0; i < valuesList.length; i++) {
            if (valuesList[i] === value) {
                valuesList.splice(i, 1);
            };
        };
    }); 
    return valuesList;  
};


module.exports = removeFromArray;


/*

run:
jasmine removeFromArray.spec.js

*/






                // console.log('valuesList B4 splice: ', valuesList,
                //                   'valuesList[i]: ', valuesList[i],)
                //console.log('valuesList AFT splice: ', valuesList);

