var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var closestElement = event.target.closest('.task-list-item');
    console.log('closest.task-item-list:', closestElement);
    closestElement.remove();
  }
}
