var $span = document.querySelectorAll('span');
document.addEventListener('keydown', keyDown);

var i = 0;
$span[0].className = 'underline';

function keyDown(event) {
  var CurrentLetter = $span[i].textContent;
  if (CurrentLetter === event.key) {
    $span[i].className = 'correct';
    $span[i + 1].className = 'underline';
    i++;
  } else {
    $span[i].className = 'incorrect underline-incorrect';
  }
}
