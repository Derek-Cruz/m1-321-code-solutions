var numberOne = 10;
var numberTwo = 20;
var numberThree = 30;

Math.max(numberOne, numberTwo, numberThree);
var maximumValue = Math.max(numberOne, numberTwo, numberThree);

console.log('maximumValue:', maximumValue);

var heroes = ['Eraser Head', 'Izuku Midoriya', 'Inasa Yoarashi', 'Endeavor'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

Math.floor(randomNumber);

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'CHRNCLS V1',
    author: 'Joey Lee'
  },
  {
    title: 'CHRNCLS V2',
    author: 'Joey Lee'
  },
  {
    title: '80R',
    author: 'Sean Lucas'
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

var fullName = 'Derek' + ' ' + 'Cruz';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
