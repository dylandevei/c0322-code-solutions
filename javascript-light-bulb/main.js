var buttonClicks = 0;
var $background = document.querySelector('body');
var $circle = document.querySelector('.circle');

$circle.addEventListener('click', handleClick);

function handleClick(event) {
  buttonClicks++;
  var background = null;
  var circleBackground = null;
  if (buttonClicks % 2 === 0) {
    background = 'black';
    circleBackground = 'black';
  }
  $background.className = 'body ' + background;
  $circle.className = 'circle ' + circleBackground;
}
