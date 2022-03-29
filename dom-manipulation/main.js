var buttonClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', handleHotButtonClick);

function handleHotButtonClick(event) {
  buttonClicks++;
  var temperature = null;
  if (buttonClicks < 4) {
    temperature = 'cold';
  } else if (buttonClicks < 7) {
    temperature = 'cool';
  } else if (buttonClicks < 10) {
    temperature = 'tepid';
  } else if (buttonClicks < 13) {
    temperature = 'warm';
  } else if (buttonClicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
  $clickCount.textContent = 'Clicks: ' + buttonClicks;
}
