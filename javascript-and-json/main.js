var books = [
  {
    isbn: 9780307278630,
    title: 'American Psycho',
    author: 'Bret Easton Ellis'
  },

  {
    isbn: 9780307277039,
    title: 'No Country for Old Men',
    author: 'Corman McCarthy'
  },
  {
    isbn: 9780582030473,
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens'
  }
];

console.log('books:', books);
console.log('type of books:', typeof (books));

var jsonStringify = JSON.stringify(books);
console.log('JSON.Stringify:', jsonStringify);
console.log('type of JSON.stringify:', typeof (jsonStringify));

var student = '[{ "id": 123452}, {"name": "Dylan De Vei"} ]';
console.log('student:', student);
console.log('type of student:', typeof (student));

var studentObj = JSON.parse(student);
console.log('type of StudentObj:', studentObj);
