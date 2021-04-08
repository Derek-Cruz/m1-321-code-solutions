/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'Neutral';
  } else if (pH >= 0 && pH <= 7) {
    return 'acid';
  } else if (pH >= 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return 'We\'re the warner brothers' + '!';
  } else if (name === 'wakko') {
    return 'We\'re the warner brothers' + '!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody' + '!';
  }
}
