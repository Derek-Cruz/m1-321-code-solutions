/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var addnew = [];
  for (var i = 0; i < words.length; i++) {
    addnew[i] = words[i] + suffix;
  }
  return addnew;
}
