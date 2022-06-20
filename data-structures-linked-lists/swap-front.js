/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  } else {
    let first = list;
    const second = list.next;
    const rest = list.next.next;
    first = second;
    first.next = list;
    first.next.next = rest;

    return first;
  }

}
