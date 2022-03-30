
var $modal = document.querySelector('.modal-button');
var $popUp = document.querySelector('.popup');
var $noButton = document.querySelector('.no-button');
var $overlay = document.querySelector('.overlay');

$modal.addEventListener('click', handleClick);
$noButton.addEventListener('click', handleClick2);

function handleClick(event) {
  $popUp.className = 'popup-display';
  $overlay.className = 'overlay-on';
}

function handleClick2(event) {
  $popUp.className = 'popup';
  $overlay.className = 'overlay';
}
