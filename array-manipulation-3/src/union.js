/* exported union */
function union(first, second) {
  var newArr = [...new Set([...first, ...second])];
  return newArr;
}
