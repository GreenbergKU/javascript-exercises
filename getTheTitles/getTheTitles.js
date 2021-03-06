const getTheTitles = function(objects) {
	let objectTitles = [];
	objects.forEach(function(object) {
		objectTitles.push(object.title);
	});
	return objectTitles;
}

module.exports = getTheTitles;

/*
JASMINE TEST: TERMINAL
	jasmine getTheTitles.spec.js
	

DIRECTIONS:
- You are given an array of objects that represent books with an author and a title that looks like this:

	const books = [
		{
			title: 'Book',
			author: 'Name'
		},
		{
			title: 'Book2',
			author: 'Name2'
		}
	]

- your job is to write a function that takes the array and returns an array of titles: 

	getTheTitles(books) 
		//  returns ['Book','Book2']

hint:
	- You should use a built-in javascript method to do most of the work for you!


REMOVED COMMENTS:

	console.log('book.title: ', object.title);
	console.log('objectTitles: ', objectTitles);


EXERCISES:
X	calculator
X	palindromes
X	caesar
X	fibonacci
X	getTheTitles
	findTheOldest
		
	(answers = ‘solutions’ branch of repo)
*/