var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  var $data = event.target.getAttribute('data-view');
  if (event.target.matches('.tab')) {
    for (var viewIndex = 0; viewIndex < $view.length; viewIndex++) {
      if ($view[viewIndex].getAttribute('data-view') === $data) {
        $view[viewIndex].className = 'view';
      } else {
        $view[viewIndex].className = 'view hidden';
      }
    }
    for (var tabIndex = 0; tabIndex < $tab.length; tabIndex++) {
      if ($tab[tabIndex] === event.target) {
        $tab[tabIndex].className = 'tab active';
      } else {
        $tab[tabIndex].className = 'tab';
      }

    }
  }
}
