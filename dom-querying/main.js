console.log('hello, world');

var headOne = document.querySelector('h1');
console.log('heading', headOne);
console.dir(headOne);

var ids = document.querySelector('#explanation');
console.log('explanation', ids);
console.dir(ids);

var hints = document.querySelector('.hint');
console.log('class', hints);
console.dir(hints);

var allP = document.querySelectorAll('p');
console.log('paragraphs', allP);

var allClass = document.querySelectorAll('.example-link');
console.log('links', allClass);
