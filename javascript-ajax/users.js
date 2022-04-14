var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = xhr.response[i].name;
    $userList.append($li);
  }
});
xhr.send();

// Use this to create variable names
//
//
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.status);
//   console.log(xhr.response);
//   var users = xhr.response;
//   for (var i = 0; i < users.length; i++) {
//     var user = users[i];
//     var $li = document.createElement('li');
//     $li.textContent = user.name;
//     $userList.append($li);
//   }
// });
// xhr.send();
