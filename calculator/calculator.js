function add(...numbers) {
	let addNumSum = 0;
	numbers.forEach(function (number) {
		addNumSum += number;
	});
	return addNumSum;
}

function subtract(...numbers) {
	let subNum = null;
	numbers.forEach(function (number) {
		subNum = subNum === null ? number : subNum - number;
	});
	return subNum;
}

function sum(sumNumbers) { 
	let sum = 0;
	sumNumbers.forEach(function(sumNumber) {
		sum += sumNumber;
	});
	return sum;	
}

// function sum(numbersArr) {
// 	let numbers = "";
// 	numbersArr.forEach(function(number) {	
// 		numbers += number === "" ? `${number}` : `, ${number}`;
// 		console.log('numbers: ', numbers);
// 	});
// 	add(numbers)

// }

function multiply(numbers) {
	let product = null;
	numbers.forEach(function(number) {
		product = product === null ? number : product * number;	
	});
	// console.log('product: ', product);
	return product;	
}

function power(num1, num2) {
	const powerNum = num1 ** num2;
	// const powerNum = Math.pow(num1, num2);
	return powerNum;
}

function factorial(num) {
	return num ? num * factorial(num - 1) : 1;
	
	// let factorialNum = num ? num * factorial(num - 1) : 1;	
	// console.log('num!: ', factorialNum);		
	// return factorialNum 			
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

/*
JASMINE TEST: TERMINAL
	jasmine calculator.spec.js

EXERCISES:
X	calculator
	palindromes
	caesar
	fibonacci
	getTheTitles
	findTheOldest
		
	(answers = ‘solutions’ branch of repo)
*/