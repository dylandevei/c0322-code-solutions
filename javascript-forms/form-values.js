
var $submit = document.querySelector('form');

$submit.addEventListener('submit', logSubmit);

function logSubmit(event) {
  var messageData = null;
  event.preventDefault();
  messageData = {
    name: document.forms[0].elements.name.value,
    email: document.forms[0].elements.email.value,
    message: document.forms[0].elements.message.value
  };
  console.log('messageData:', messageData);
  document.querySelector('form').reset();

}
