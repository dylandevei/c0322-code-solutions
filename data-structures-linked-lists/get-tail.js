/* exported getTail */

function getTail(list) {
  while (list.next !== null) {
    list = list.next;
  }
  if (list.next === null) {
    return list.data;
  }
}
