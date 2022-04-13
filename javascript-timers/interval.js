var $countdown = document.querySelector('.countdown-display');
var counterdownID = null;
var count = 4;
setInterval(countdown, 1000);

function countdown() {
  count--;
  if (count > 0) {
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(counterdownID);
  }
}
