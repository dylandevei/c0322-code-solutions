function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('value of name:', event.target.value);
}

var $name = document.forms[0].elements[0];
var $email = document.forms[0].elements[1];
var $textArea = document.forms[0].elements[2];

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('input', handleInput);
