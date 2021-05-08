/* exported capitalizeWords */
function capitalizeWords(string) {
  var newString = '';
  var test = string.split(' ');
  for (var i = 0; i < test.length; i++) {
    test[i] = test[i][0].toUpperCase() + test[i].substr(1).toLowerCase();
    newString = test.join(' ');
  }
  return newString;
}
