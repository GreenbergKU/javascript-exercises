const fibonacci = function(n) {
	let num = n;
	let a = 1, b = 0, temp;
	if (n < 0) return "OOPS";
	while (num > 0) {
		temp = a;
		a = a + b;
		b = temp; 
		num--;
	};
	return b;
};

module.exports = fibonacci

/*
//// JASMINE TEST: TERMINAL ////

	jasmine fibonacci.spec.js


//// DIRECTIONS ////

- Create a function that returns a specific member of the fibonacci sequence:

    > a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

    
//// EXAMPLES ////

- fibonacci(4) 
    // returns the 4th member of the series: 3  (1, 1, 2, 3)

- fibonacci(6) 
    // returns 8

```
//// EXERCISES ////

X	calculator
X	palindromes
X	caesar
X	fibonacci
	getTheTitles
	findTheOldest
		
	(answers = ‘solutions’ branch of repo)
*/

//// REMOVED COMMENTS ////


// RECURSIVE SOLUTION //

	// let numF;
	// if (n <= 1) {
	// 	numF = 1;
	// 	return numF;
	// }
	// numF = fibonacci(n - 1) + fibonacci(n - 2);

	// console.log('numF: ', numF);
	// return numF;
// /////////////////////////
	// if (n > 1) {
	// 	return fibonacci(n - 1) + fibonacci(n - 2);
	// } else return 1


/*
let fSequennce = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...]

function fibonacci(n){
	let num = n;
	let a = 1, b = 0, temp;
	while (num >= 0){
	  temp = a;
	  a = a + b;
	  b = temp;
	  num--;
	}
		// a = 1, b = 0, temp;
		
		// a = 1, b = 1 , temp = 1 
		// a = 2, b = 1, temp = 1 
		// a = 3, b = 2, temp = 2
		// a = 5, b = 3, temp = 3
		// a = 8, b = 5, temp = 5
		// a = 13, b = 8, temp = 8
		// a = 21, b = 13, temp = 13
		// a = 34, b = 21, temp = 21
		// a = 55, b = 34, temp = 34
		// a = 89, b = 55, temp = 55
		// a = 144, b = 89, temp = 89

	return b;
}


*/
		
		