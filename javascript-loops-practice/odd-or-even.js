/* exported oddOrEven */
function oddOrEven(numbers) {
  var names = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      names.push('even');
    } else {
      names.push('odd');
    }
  }
  return names;
}
