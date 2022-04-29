var $countdown = document.querySelector('.countdown-display');
var count = 4;
var intId = setInterval(countdown, 1000);

function countdown() {
  count--;
  if (count > 0) {
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intId);
  }
}
