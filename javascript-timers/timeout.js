var $message = document.querySelector('h1');

function changeText() {
  var newMessage = $message.textContent = 'Hello There';
  return newMessage;
}
setTimeout(changeText, 2000);
