/* exported zip */
function zip(first, second) {
  var newArr = [];
  var test;

  if (first.length <= second.length) {
    test = first.length;
  } else {
    test = second.length;
  }

  for (var i = 0; i < test; i++) {
    var secArr = [];
    secArr.push(first[i]);
    secArr.push(second[i]);
    newArr.push(secArr);
  }
  return newArr;
}
