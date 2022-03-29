var lightOn = true;
var $body = document.querySelector('body');
var $circle = document.querySelector('.circle');

$circle.addEventListener('click', handleClick);

function handleClick(event) {
  if (lightOn === true) {
    $circle.className = 'circle off';
    $body.className = 'body black';
    lightOn = false;
    return;
  }
  if (lightOn === false) {
    $circle.className = 'circle on';
    $body.className = 'body white';
    lightOn = true;

  }
}
