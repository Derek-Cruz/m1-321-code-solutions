/* exported chunk */
function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }
  var newArr = [];
  for (var i = 0; i < array.length; i += size) {
    var miniArr = array.slice(i, i + size);
    newArr.push(miniArr);
  }
  return newArr;
}
