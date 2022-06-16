/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return list.next;
  }
  const remove = list.next.next;
  list.next = remove;
}
