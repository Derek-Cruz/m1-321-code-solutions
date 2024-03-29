function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick, false);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseOver, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $double = document.querySelector('.double-click-button');
$double.addEventListener('dblclick', handleDoubleClick, false);
