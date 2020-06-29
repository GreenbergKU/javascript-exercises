//const sumAll = function(num1, num2) {
const sumAll = function(...numbers) {
    let message, sum;
    //console.log('numStart: ', numStart, 'numEnd: ', numEnd);
    
    numbers.forEach(function(number) {
        //message = number < 0 || typeof(number) !== "number" ? "ERROR" : null; //: null;
        return sum = number < 0 || typeof(number) !== "number" ? "ERROR" : 0 //: null;
        //console.log("number: ", number, "numberNeg:", number < 0, "message", message, "sum", sum)
        
    });

    //console.log("sum/message: ", sum, "/", message)
    
    //sumMessage = message === "ERROR" ? message : 0
    //console.log('sumMessage: ', sumMessage);

    let numStart = numbers[0] < numbers[1]  ? numbers[0] : numbers[1];
    let numEnd = numStart === numbers[0] ? numbers[1] : numbers[0];
    let i = numEnd;
    
    while (i >= numStart && sum != "ERROR") {
        //sum = 0;
        sum += i;
        i--;
        if (sum < 0) {
            sum = "ERROR"
        };
    };
    return sum;
};

module.exports = sumAll;
    // while (i >= numStart) {
    //     if (sum === 0) {
    //         sum += i;         
    //         i--;  
    //     }
    
       
    // };
    // console.log('sum (while): ', sum);
    // return sum;
            // if (number < 0 || typeof(number) !== "number") {
            //     console.log("num: ", num);
            //     return sum = "ERROR"; 
            // };
            // break allSum;
                // console.log("num: ", num);
                // return sum = "ERROR"; 
            // break allSum;
   
    // allSum:
    // for (let i = numEnd; i >= numStart ; i--) {
        //let sumAllArguments = [num1, num2];
            
            // console.log(
            //     "sumAllArguments.length: ", sumAllArguments.length, 
            //     "sumAllArguments[0]: ", sumAllArguments[0],
            // );

        // for (let j = 0; j < sumAllArguments.length; j++) {
        //     num = sumAllArguments[j];
                
                // console.log("negInteger:", num < 0, "typeof(num)", typeof(num))
    // if (num1 < 0 || num2 < 0) {
    //    sum = "ERROR";
    //    break
    // };
            
    //     };
    //     sum = 0;
    //     sum += i;           
    // };
    // console.log('sum (for): ', sum);
    // return sum
    

    
    // for (let i = numEnd; i >= numStart ; i--) {
    //     sum = 0;
    //     sum += i;           
    // };
    // console.log('sum (for): ', sum);
    // return sum

    // BOTH OF THESE WORK

    // let i = numEnd; 
    // while (i >= numStart) {
    //     sum = 0;
    //     sum += i;         
    //     i--;  
    // };
    // console.log('sum (while): ', sum);

    //return sum;


/*
helloWorld
repeatString
reverseString
removeFromArray
sumAll
leapYears
tempConversion

run:
jasmine sumAll.spec.js

*/

   // let numStart = num1 < num2  ? num1 : num2;
    // let numEnd = numStart === num1 ? num2 : num1;
    
    // console.log('numStart: ', numStart, 'numEnd: ', numEnd);
    // let sum = 0;
    // let i = numEnd;  
     
    // while (i >= numStart)
    //  allSum: {
    //     console.log(sumAll.arguments.length, sumAll.arguments[0]);
    //     let num; 
    //     for (let j = 0; j < sumAll.arguments.length; j++) {
    //         num = sumAll.arguments[j];
    //         console.log("negInteger:", num < 0, "typeof(num)", typeof(num))
    //         if (num < 0 || typeof(num) != "number" ) {
    //             sum = "ERROR";
    //             break allSum
    //         };
    //     };
    //     sum += i;         
    //     i--;  
    // };
    // console.log('sum (while): ', sum);
    // return sum;

    // if (num1 < 0 || num2 < 0) {
    //     return  "ERROR"
    // };