/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  newString = string.substring(0, firstIndex) + string[secondIndex] + string.substring(firstIndex + 1, secondIndex) + string[firstIndex] + string.substring(secondIndex + 1);
  return newString;
}
