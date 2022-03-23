
var num1 = 20;
var num2 = 40;
var num3 = 60;

var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Batman', 'Spawn', 'Ironman'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [

  {
    title: 'Less Than Zero',
    author: 'Bret Easton Ellis'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Dylan' + ' ' + 'DeVei';
console.log(fullName);
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
