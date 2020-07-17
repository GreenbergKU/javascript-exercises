const findTheOldest = function(objects) {
	const ages = findAllAges(objects);
	let oldestObj = null, i = 0;
	while (!oldestObj) {
		objects[i].age === findOldest(ages) ? oldestObj = objects[i] : i++;
	};
	return oldestObj;
};

function findAllAges(objects) {
	let allAges = [];
	objects.forEach(function(object) {
		let deathYear = object.yearOfDeath !== undefined ? object.yearOfDeath : getCurrentDate();
		object.age = findAge(deathYear, object.yearOfBirth);
		allAges.push(object.age);	
	});
	return allAges;
};

function getCurrentDate() {
	return (new Date).getFullYear();
};	

function findAge(num1, num2) {
	return num1 - num2;
};

function findOldest(numbers) {
	return Math.max(...numbers);
};


module.exports = findTheOldest

/*
JASMINE TEST: TERMINAL
	jasmine findTheOldest.spec.js


DIRECTIONS:

- given an array of objects representing people with a birth and death year, return the oldest person.

hints:
	- You should return the whole person object, but the tests mostly just check to make sure the name is correct.

	- this can be done with a couple of chained array methods, or by using `reduce`

	- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.


EXERCISES:
X	calculator
X	palindromes
X	caesar
X	fibonacci
X	getTheTitles
X	findTheOldest
		
	(answers = ‘solutions’ branch of repo)


REMOVED COMMENTS:
	// objects.forEach(function(object) {	
		// if (object.age === findOldest(allAges)) {
		// 		oldestObj = object;	
		// };
	// });

	// 	console.log('object.age: ', object.age);
	// 			console.log('oldestObj: ', oldestObj);
*/