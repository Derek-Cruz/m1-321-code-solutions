/* exported numVowels */
function numVowels(string) {
  var howMany = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      howMany += 1;
    }
  }
  return howMany;
}
