/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  while (list.next !== null) {
    list = list.next;
  }
  const node = new LinkedList(value);
  list.next = node;
  if (list.next === null) {
    return node;
  }
}
