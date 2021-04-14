/* exported countdown */
function countdown(number) {
  var count = [];
  for (var input = number; input >= 0; input--) {
    count.push(input);
  }
  return count;
}
