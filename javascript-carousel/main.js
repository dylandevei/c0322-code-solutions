var imageArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $rightArrow = document.querySelector('#right');
var $leftArrow = document.querySelector('#left');
var $img = document.querySelector('img');
var $circles = document.querySelectorAll('.dot');
var intId = setInterval(forwardClick, 3000);
var index = null;

for (var i = 0; i < $circles.length; i++) {
  $circles[i].addEventListener('click', dotClick);
}

$rightArrow.addEventListener('click', forwardClick);
$leftArrow.addEventListener('click', backClick);

function dotClick(event) {
  clearInterval(intId);
  intId = setInterval(forwardClick, 3000);
  index = event.target.getAttribute(['id']);
  switchImage();
  switchDots();
  $circles[index].setAttribute('class', 'fas fa-circle');
}

function switchImage() {
  $img.setAttribute('src', imageArray[index]);
  switchDots();
  $circles[index].setAttribute('class', 'fas fa-circle');
}

function switchDots() {
  for (var i = 0; i < $circles.length; i++) {
    $circles[i].setAttribute('class', 'far fa-circle');
  }
}
function forwardClick() {
  clearInterval(intId);
  intId = setInterval(forwardClick, 3000);
  index++;
  if (index > imageArray.length - 1) {
    index = 0;
  }
  switchImage();
}

function backClick() {
  clearInterval(intId);
  intId = setInterval(forwardClick, 3000);
  index--;
  if (index < 0) {
    index = imageArray.length - 1;
  }
  switchImage();
}
