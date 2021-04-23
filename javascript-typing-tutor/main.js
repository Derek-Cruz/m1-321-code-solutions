var $span = document.querySelectorAll('span');
var index = 0;

document.addEventListener('keydown', function (event) {
  if ($span[index].textContent === event.key) {
    $span[index].className = 'color green';
    index++;
    $span[index].className = 'color borderbtm';
  } else {
    $span[index].className = 'color red';
  }
});
