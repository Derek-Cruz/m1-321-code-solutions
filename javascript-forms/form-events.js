function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}
var $nameInput = document.querySelector('#user-name');
$nameInput.addEventListener('focus', handleFocus);

var $emailInput = document.querySelector('#user-email');
$emailInput.addEventListener('focus', handleFocus);

var $msgInput = document.querySelector('#user-message');
$msgInput.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}
$nameInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('blur', handleBlur);
$msgInput.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log(event.target.name);
  console.log('value of name', event.target.value);
}
$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('input', handleInput);
$msgInput.addEventListener('input', handleInput);
