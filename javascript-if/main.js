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
  if (string[0] === string[0].toUpperCase()) {
    return true;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 21) {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21) {
    return !true;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'Neutral';
  }
}

function introduceWarnerBro(name) {
  if (name === 'Yakko') {
    return 'We\'re the warner brothers' + '!';
  }
}
