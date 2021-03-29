var student = {
  firstName: 'Derek',
  lastName: 'Cruz',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Toyota';

console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

var vehicle = {
  make: 'mazda',
  model: 'rx7',
  year: 1988
};

vehicle['color'] = 'White';
vehicle['isConvertible'] = false;

console.log('Value of vehicle["color"]:', vehicle['color']);
console.log('Value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'leo',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
