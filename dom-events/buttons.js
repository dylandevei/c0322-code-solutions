function handleClick(event) {
  console.log('button clicked:');
  console.log('event:', event);
  console.log('event.target:', document.querySelector('.click-button'));
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered:');
  console.log('event:', event);
  console.log('event.target:', document.querySelector('.hover-button'));
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked:');
  console.log('event:', event);
  console.log('event.target:', document.querySelector('.double-click-button'));
}

var $dblClickButton = document.querySelector('.double-click-button');
$dblClickButton.addEventListener('dblclick', handleDoubleClick, false);
